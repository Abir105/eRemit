import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {CountryService } from '@core/services/country.service';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import { CountryInfo } from '../../../model/countryInfo';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { AddCountryComponent } from '../add-country/add-country.component';
import { DeleteCountryComponent } from '../delete-country/delete-country.component';
import { UpdateCountryComponent } from '../update-country/update-country.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {

  public displayedColumns = ['sl', 'name', 'short_name', 'update', 'delete'];
  public dataSource = new MatTableDataSource<CountryInfo>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, {static: false}) notification: NotificationCompoComponent;

  constructor(private repoService: CountryService, private matDialog: MatDialog) {
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

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllCountries = () => {
    this.repoService.getData('countries')
      .subscribe(res  => {
        this.dataSource.data = res.Country;
      });
  };


  public redirectToCreate = (body: string) => {
    this.repoService.create('addCountry', body)
      .subscribe(res => {
        this.getAllCountries();
      });
  };

  public redirectToUpdate = (body: string) => {
    this.repoService.update('updateCountry', body)
      .subscribe(res => {
        this.getAllCountries();
      });
  };

  public redirectToDelete = (id: string) => {
    /*
      const dialogRef = this.matDialog.open(DeleteCountryComponent);
      dialogRef.afterClosed().subscribe(result => {
      });  */
    this.repoService.delete(id)
      .subscribe(res => {
        this.getAllCountries();
      });
  };

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: 'some name' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(AddCountryComponent, {
      height: '300px',
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
    this.dialogRef = this.matDialog.open(DeleteCountryComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
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
    this.dialogRef = this.matDialog.open(UpdateCountryComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
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
