import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { TreasuryApprovalService } from '@core/services/treasury-approval.service';
import { NotificationCompoComponent } from '../../../../notificationComp/notificationCompo.component';
import { TreasuryInfo } from '../../../../notificationComp/model/TreasuryInfo';
import { DeleteTreasuryApprovalComponent } from '../delete-treasury-approval/delete-treasury-approval.component';
import { TreasuryApproveComponent } from '../treasury-approve/treasury-approve.component';

@Component({
  selector: 'app-treasury-approval',
  templateUrl: './treasury-approval.component.html',
  styleUrls: ['./treasury-approval.component.scss']
})
export class TreasuryApprovalComponent implements OnInit {
  public displayedColumns = [
    'sl',
    'V_Date',
    'Exchange_House',
    'Cur',
    'USD_CREDIT',
    'Ex_HouseRate',
    // 'FC_Account',
    // 'BDT_Account',
    // 'NOSTRO_ACCOUNT',
    'Bank_Name',
    'Notional_Rate',
    'Message',
    'Approve',
    'delete'
  ];
  public dataSource = new MatTableDataSource<TreasuryInfo>();
  private dialogRef: any;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  get formArray(): AbstractControl | null {
    return this.reactiveForm1.get('formArray');
  }
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _treasuryApprovalService: TreasuryApprovalService,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.reactiveForm1 = this.fb.group({});
    this.getAllTreasuryApprovals();
  }
  public getAllTreasuryApprovals = () => {
    this._treasuryApprovalService.getTreasury('treasury')
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
     //console.log(this.dataSource);
  };

  // tslint:disable-next-line:variable-name
  deleteTreasuryRow(Id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { Id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(DeleteTreasuryApprovalComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      //  console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Deleted successfully');
        this.getAllTreasuryApprovals();
      } else {
        this.notification.errorsmsg('Sorry! You Can not Delete');
      }
    });
  }

  approveTreasuryRow(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(TreasuryApproveComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      console.log(value,"ts", );
      if (affectedRows === 1) {
        this.notification.successmsg('Treasury File was approved successfully');
        this.reactiveForm1.reset();
        this.getAllTreasuryApprovals();
      } else {
        this.notification.errorsmsg('Sorry! This file can not be approved');
      }
    });
  }
}
