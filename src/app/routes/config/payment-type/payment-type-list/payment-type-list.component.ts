import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaymentTypeService } from '@core/services/payment-type.service';
import { PaymentTypeAddComponent } from '../payment-type-add/payment-type-add.component';
import { OfficerDeleteComponent } from '../../officer-info/officer-delete/officer-delete.component';
import { PaymentTypeDeleteComponent } from '../payment-type-delete/payment-type-delete.component';
import { PaymentTypeUpdateComponent } from '../payment-type-update/payment-type-update.component';

@Component({
  selector: 'app-payment-type-list',
  templateUrl: './payment-type-list.component.html',
  styleUrls: ['./payment-type-list.component.scss']
})
export class PaymentTypeListComponent implements OnInit {


  public displayedColumns = ['sl', 'paymentTypeName',  'update', 'delete'];
  public dataSource = new MatTableDataSource<any>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, {static: false}) notification: NotificationCompoComponent;

  constructor(private paymentTypeService: PaymentTypeService, private matDialog: MatDialog,  private toastr: ToastrService) {
  }
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  ngOnInit() {
    this.getPaymentTypes();
  }
  public getPaymentTypes = () => {
    this.paymentTypeService.paymentTypeList('paymentType')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };
  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(PaymentTypeAddComponent, {
      height: '200px',
      width: '400px',
      autoFocus: false,
      disableClose: true
    });
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Payment Type Created successfully');
        this.getPaymentTypes();
      } else {
        this.notification.errorsmsg('Sorry! Payment Type not Added');
      }
    });
  }

  UpdatePaymentType(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '200px';
    dialogConfig.width = '400px';
    this.dialogRef = this.matDialog.open(PaymentTypeUpdateComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Payment Type  Updated successfully');
        this.getPaymentTypes();
      } else {
        this.notification.errorsmsg('Sorry! Officer not Updated');
      }
    });
  }
  deletePaymentTypeRow( id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(PaymentTypeDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Deleted successfully');
        // this.notification.successmsg('Currency Deleted successfully');
        this.getPaymentTypes();
      } else {
        this.notification.errorsmsg('Sorry! Payment Type not Deleted');
      }
    });
  }

}
