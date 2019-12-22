import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OfficerService } from '@core/services/officer.service';
import { OfficerAddComponent } from '../officer-add/officer-add.component';
import { OfficerDeleteComponent } from '../officer-delete/officer-delete.component';
import { ToastrService } from 'ngx-toastr';
import { AddCurrencyComponent } from '../../currency/add-currency/add-currency.component';


@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {


  public displayedColumns = ['employeeCode', 'status', 'employeeName', 'emailAddress',  'update', 'delete'];
  public dataSource = new MatTableDataSource<any>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, {static: false}) notification: NotificationCompoComponent;

  constructor(private officerService: OfficerService, private matDialog: MatDialog,  private toastr: ToastrService) {
  }
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  ngOnInit() {
    this.getAllOfficers();
  }
  public getAllOfficers = () => {
    this.officerService.officerList('officers')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };
  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: '' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(OfficerAddComponent, {
      height: '400px',
      width: '400px',
      autoFocus: false,
      disableClose: true
    });
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Officer  Created successfully');
        this.getAllOfficers();
      } else {
        this.notification.errorsmsg('Sorry! Officer not Added');
      }
    });
  }


  // addNew() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = { employeeName: '' };
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   this.dialogRef = this.matDialog.open(OfficerAddComponent, {
  //     height: '400px',
  //     width: '400px',
  //     autoFocus: false,
  //     disableClose: true
  //   });
  //   this.dialogRef.afterClosed().subscribe(value => {
  //     const obj = JSON.parse(value);
  //     console.log(obj);
  //     const affectedRows = obj.data.affectedRows;
  //     if (affectedRows === 1) {
  //       this.toastr.success('Officer  Deleted successfully');
  //       // this.notification.successmsg('Currency Added successfully');
  //       this.getAllOfficers();
  //     } else {
  //       this.notification.errorsmsg('Sorry! Officer not Added');
  //     }
  //   });
  // }

  // UpdateCurrency(element) {
  //
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = element;
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.height = '400px';
  //   dialogConfig.width = '400px';
  //   this.dialogRef = this.matDialog.open(UpdateCurrencyComponent, dialogConfig);
  //   this.dialogRef.afterClosed().subscribe(value => {
  //     const obj = JSON.parse(value);
  //     console.log(obj);
  //     const affectedRows = obj.data.affectedRows;
  //     if (affectedRows === 1) {
  //       this.notification.successmsg('Currency Updated successfully');
  //       this.getAllCurrencies();
  //     } else {
  //       this.notification.errorsmsg('Sorry! Currency not Updated');
  //     }
  //   });
  // }
  deleteCurrencyRow( id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(OfficerDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Officer  Deleted successfully');
       // this.notification.successmsg('Currency Deleted successfully');
        this.getAllOfficers();
      } else {
        this.notification.errorsmsg('Officer! Currency not Deleted');
      }
    });
  }

}
