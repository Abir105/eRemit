import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TreasuryService } from '@core/services/treasury.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as XLSX from 'ts-xlsx';
import { MatTableDataSource } from '@angular/material/table';
import { TreasuryInfo } from '../../../model/TreasuryInfo';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.scss']
})
export class TreasuryComponent implements OnInit {
  public dataSource = new MatTableDataSource<TreasuryInfo>();
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  [x: string]: any;
  public displayedColumns = ['Sr_No', 'V_Date', 'Exchange_House ', 'Cur', 'USD_Credit', 'Comp', 'Ex_0Rate', 'FCAccount', 'BDT_Account ', 'Nostro_Account', 'Account_Name', 'Converted_BTK', 'Exch_Gain','BTK_nRate','Bank_Name','National_Rate'];
  treasuryfileProcessing = Subscription;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  private uploadFileData: string;
  private approvalFileData: string;
  private validationFileData: string;
  date: string;
  get formArray(): AbstractControl | null {
    return this.reactiveForm1.get('formArray');
  }
  constructor(private router: Router, private _formBuilder: FormBuilder, private fb: FormBuilder, private treasuryService: TreasuryService) {
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
    var fileDoc = { file_name: this.file.name}
    var myJSON = JSON.stringify(fileDoc);
    console.log(myJSON);
    this.treasuryService.fileName({ route: 'fileName', body: myJSON }).subscribe(dd =>{
      console.log(dd);
      this.notification.successmsg('Treasury File was uploaded successfully');
    });
    console.log( myJSON , 'myJson');

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      this.treasuryService.addFileUpload({ route: 'addFileUpload', body: jsonData })
        .subscribe(data => {
          this.notification.successmsg('Treasury File was uploaded successfully');
          this.reactiveForm1.reset();
        }, (err) => {
          this.notification.errorsmsg('Sorry! This file can not be added');
        });
    };
    fileReader.readAsArrayBuffer(this.file);
  }

}
