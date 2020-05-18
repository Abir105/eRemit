import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TreasuryService } from '@core/services/treasury.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as XLSX from 'ts-xlsx';
import { MatTableDataSource } from '@angular/material/table';
import { TreasuryInfo } from '../../../notificationComp/model/TreasuryInfo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TreasuryDeleteComponent } from '../treasury-delete/treasury-delete.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TreasuryUpdateComponent } from '../treasury-update/treasury-update.component';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.scss']
})
export class TreasuryComponent implements OnInit {
  public displayedColumns = ['Sl_No', 'V_Date', 'Exchange_House ', 'Cur', 'USD_CREDIT', 'Ex_HouseRate', 'FC_Account', 'BDT_Account ', 'NOSTRO_ACCOUNT', 'Bank_Name','Notional_Rate'];
  public dataSource = new MatTableDataSource<TreasuryInfo>();
  private dialogRef: any;
  [x: string]: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  private uploadFileData: any;
  treasury = Subscription;
  reactiveForm1: FormGroup;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };

  date: string;
  Cur: string;
  Stelar_Cur: string;
  Id: number;
  get formArray(): AbstractControl | null {
    return this.reactiveForm1.get('formArray');
  }
  constructor(public dialog: MatDialog,
              private router: Router,
              private _formBuilder: FormBuilder,
              private fb: FormBuilder,
              private treasuryService: TreasuryService) {
  }

  ngOnInit() {
    this.reactiveForm1 = this.fb.group({

      formArray: this.fb.array([
        this.fb.group({}),
        this.fb.group({}),
        this.fb.group({}),
      ]),
    });
    this.getAllUploadFileData();
  }
  private getAllUploadFileData() {
    this.treasuryService.getUploadFileData('uploadFileData')
      .subscribe(res => {
        this.uploadFileData = res.data;
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  //file upload
  arrayBuffer: any;
  file: File;


  incomingfile(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
  }

  Upload() {

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary', cellDates:true, cellNF: false });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // @ts-ignore
      var jsonData = XLSX.utils.sheet_to_json(worksheet,  {dateNF:"YYYY-MM-DD"});

      this.treasuryService.addFileUpload({ route: 'addFileUpload', body: jsonData })
        .subscribe(data => {
          this.notification.successmsg('Treasury File was uploaded successfully');
          this.reactiveForm1.reset();
          this.getAllUploadFileData();
        }, (err) => {
          this.notification.errorsmsg('Sorry! This file can not be added');
        });
    };
    fileReader.readAsArrayBuffer(this.file);
   }


  UpdateCur(s) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = s;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '300px';
    dialogConfig.width = '330px';
    this.dialogRef = this.dialog.open(TreasuryUpdateComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      console.log(obj,affectedRows);
      if (affectedRows === 1) {
        this.notification.successmsg('Treasury file Updated successfully');
        this.getAllUploadFileData();
      } else {
        this.notification.errorsmsg('Sorry! Treasury file not Updated');
      }
    });
  }

  // tslint:disable-next-line:variable-name
  deleteTreasuryRow(Id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { Id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(TreasuryDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      console.log(obj,"ts", );
      if (affectedRows === 1) {
        this.notification.successmsg('Deleted successfully');
        this.getAllUploadFileData();
      } else {
        this.notification.errorsmsg('Sorry! Cannot Deleted');
      }
    });
  }
}
