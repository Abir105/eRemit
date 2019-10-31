import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountryInfo } from '../../../model/countryInfo';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { CountryService } from '@core/services/country.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CurrencyService } from '@core/services/currency.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddCountryComponent } from '../../country/add-country/add-country.component';
import { AddCurrencyComponent } from '../add-currency/add-currency.component';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  public displayedColumns = ['sl', 'name', 'short_name', 'sft_code', 'report_name', 'update', 'delete'];
  public dataSource = new MatTableDataSource<CountryInfo>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, {static: false}) notification: NotificationCompoComponent;

  constructor(private repoService: CurrencyService, private matDialog: MatDialog) { }
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };

  ngOnInit() {
  }
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
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Currency Added successfully');
       // this.getAllCountries();
      } else {
        this.notification.errorsmsg('Sorry! Currency not Added');
      }
    });
  }
}
