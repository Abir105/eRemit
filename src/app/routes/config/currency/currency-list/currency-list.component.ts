import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CurrencyService } from '@core/services/currency.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddCurrencyComponent } from '../add-currency/add-currency.component';
import { CurrencyInfo } from '../../../notificationComp/model/currencyInfo';
import { UpdateCurrencyComponent } from '../update-currency/update-currency.component';
import { DeleteCurrencyComponent } from '../delete-currency/delete-currency.component';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit  {

  public displayedColumns = ['sl', 'cur_name', 'cur_short_name', 'cur_swift_code', 'cur_report_name', 'update', 'delete'];
  public dataSource = new MatTableDataSource<CurrencyInfo>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, {static: false}) notification: NotificationCompoComponent;

  constructor(private repoService: CurrencyService, private matDialog: MatDialog) {
  }
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  ngOnInit() {
    this.getAllCurrencies();
  }
  public getAllCurrencies = () => {
    this.repoService.getData('currencies')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };

  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: '' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(AddCurrencyComponent, {
      height: '400px',
      width: '400px',
      autoFocus: false,
      disableClose: true
    });
    this.dialogRef.afterClosed().subscribe(value => {

      if (value) {
        const obj = JSON.parse(value);
        console.log(obj);
        const affectedRows = obj.data.affectedRows;
        if (affectedRows === 1) {
          this.notification.successmsg('Currency Added successfully');
          this.getAllCurrencies();
        } else {
          this.notification.errorsmsg('Sorry! Currency not Added');
        }
      }
    });
  }

  UpdateCurrency(element) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '400px';
    this.dialogRef = this.matDialog.open(UpdateCurrencyComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {

      if (value) {
        const obj = JSON.parse(value);
        console.log(obj);
        const affectedRows = obj.data.affectedRows;
        if (affectedRows === 1) {
          this.notification.successmsg('Currency Updated successfully');
          this.getAllCurrencies();
        } else {
          this.notification.errorsmsg('Sorry! Currency not Updated');
        }
      }
    });
  }
  // tslint:disable-next-line:variable-name
  deleteCurrencyRow( cur_short_name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { cur_short_name };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(DeleteCurrencyComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {

      if (value) {
        const obj = JSON.parse(value);
        console.log(obj);
        const affectedRows = obj.data.affectedRows;
        if (affectedRows === 1) {
          this.notification.successmsg('Currency Deleted successfully');
          this.getAllCurrencies();
        } else {
          this.notification.errorsmsg('Sorry! Currency not Deleted');
        }
      }
    });
  }
}
