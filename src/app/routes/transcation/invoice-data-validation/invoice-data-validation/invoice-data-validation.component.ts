import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceDataValidationService } from '@core/services/invoice-data-validation.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceDataValidationInfo } from '../../../notificationComp/model/InvoiceDataValidationInfo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InvoiceReleaseStatusComponent } from '../invoice-release-status/invoice-release-status.component';

@Component({
  selector: 'app-invoice-data-validation',
  templateUrl: './invoice-data-validation.component.html',
  styleUrls: ['./invoice-data-validation.component.scss']
})
export class InvoiceDataValidationComponent implements OnInit {
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  invoiceDataValidation: Subscription;
  reactiveForm: FormGroup;
  public displayedColumns = [
    'sl',
    'Date',
    'Payment',
    'TT_No',
    'Beneficiary',
    //'Branch_Name',
    // 'Routing_No',
    // 'Account_No',
    // 'Amount',
    // 'Payment_Type',
    // 'Remitter_Name',
    'Release_Status'
  ];
  public dataSource = new MatTableDataSource<InvoiceDataValidationInfo>();
  private dialogRef: any;

  constructor(private invoiceDataValidationService: InvoiceDataValidationService,public dialog: MatDialog, private fb: FormBuilder, private matDialog: MatDialog) {}
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  ngOnInit() {
    this.getAll();
  }
  public getAll = () => {
    this.invoiceDataValidationService.getData('invoice')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };
  disabled: true;


  Release_Row(element: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(InvoiceReleaseStatusComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      console.log(value,"ts", );
      if (affectedRows === 1) {
        this.notification.successmsg('Release successfully');
        this.reactiveForm.reset();
        this.getAll();
      } else {
        this.notification.errorsmsg('Sorry! This file can not Release');
      }
    });
  }
}
