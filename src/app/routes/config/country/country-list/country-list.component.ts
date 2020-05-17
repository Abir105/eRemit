import {  Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '@core/services/country.service';
import { CountryInfo } from '../../../notificationComp/model/countryInfo';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { AddCountryComponent } from '../add-country/add-country.component';
import { DeleteCountryComponent } from '../delete-country/delete-country.component';
import { UpdateCountryComponent } from '../update-country/update-country.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  public displayedColumns = ['sl', 'name', 'short_name', 'isoCode', 'update', 'delete'];
  public dataSource = new MatTableDataSource<CountryInfo>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;

  constructor(private countryService: CountryService, public dialog: MatDialog) {
  }
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  ngOnInit() {
    this.getAllCountries();
  }

  public getAllCountries = () => {
    this.countryService.getCountry('country')
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    //  console.log(this.dataSource);
  };
  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: '' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AddCountryComponent, {
      height: '330px',
      width: '400px',
      autoFocus: false,
      disableClose: true
    });
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Country Added successfully');
        this.getAllCountries();
      } else {
        this.notification.errorsmsg('Sorry! Country not Added');
      }
    });
  }



  // tslint:disable-next-line:variable-name
  deleteCountryRow(short_name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { short_name };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(DeleteCountryComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      //  console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Country Deleted successfully');
        this.getAllCountries();
      } else {
        this.notification.errorsmsg('Sorry! Country not Deleted');
      }
    });
  }


  UpdateCountry(element) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '330px';
    dialogConfig.width = '400px';
    this.dialogRef = this.dialog.open(UpdateCountryComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      // console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Country Updated successfully');
        this.getAllCountries();
      } else {
        this.notification.errorsmsg('Sorry! Country not Updated');
      }
    });
  }

}
