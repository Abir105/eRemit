import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsdSellingApprovalService } from '@core/services/usd-selling-approval.service';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationCompoComponent } from '../../../../notificationComp/notificationCompo.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { USDSellingInfo } from '../../../../notificationComp/model/USDSellingInfo';
import { UsdsellingApproveComponent } from '../usdselling-approve/usdselling-approve.component';
import { UsdsellingDeleteComponent } from '../usdselling-delete/usdselling-delete.component';

@Component({
  selector: 'app-usd-selling-approval',
  templateUrl: './usd-selling-approval.component.html',
  styleUrls: ['./usd-selling-approval.component.scss']
})
export class UsdSellingApprovalComponent implements OnInit {
  public displayedColumns = [
    'sl',
    'Exchange_House',
    'Account_Number',
    'Treasury_Rate',
    'Offer_Rate',
    'Current_Balance',
    'Selling_Amount',
    'Approve',
    'Message',
    'Cancel'
  ];
  public dataSource = new MatTableDataSource<USDSellingInfo>();
  private dialogRef: any;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  private usdSellingData: any;
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
    private _usdSellingApproval: UsdSellingApprovalService,
    public dialog: MatDialog,
    private router: Router,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
  ) { }
  ngOnInit() {
    this.reactiveForm1 = this.fb.group({});
    this.getAllUsdSellingInfo();
  }
  public getAllUsdSellingInfo = () => {
    this._usdSellingApproval.getUSDselling('usdSellingData')
      .subscribe(res => {
        //this.usdSellingData = res.data;
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    //console.log(this.dataSource);
  };

  approveUSDSellingRow(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(UsdsellingApproveComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      console.log(value,"ts", );
      if (affectedRows === 1) {
        this.notification.successmsg('USD Selling was approved successfully');
        this.reactiveForm1.reset();
        this.getAllUsdSellingInfo();
      } else {
        this.notification.errorsmsg('Sorry! This file can not be approved');
      }
    });
  }
  deleteUSDSellingRow(id) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { id };
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialogRef = this.dialog.open(UsdsellingDeleteComponent, dialogConfig);
      this.dialogRef.afterClosed().subscribe(value => {
        const obj = JSON.parse(value);
        //  console.log(obj);
        const affectedRows = obj.data.affectedRows;
        if (affectedRows === 1) {
          this.notification.successmsg('Deleted successfully');
          this.getAllUsdSellingInfo();
        } else {
          this.notification.errorsmsg('Sorry! You Can not Delete');
        }
      });
    }
  }
