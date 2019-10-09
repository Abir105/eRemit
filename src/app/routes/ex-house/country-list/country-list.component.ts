import {AddCountryComponent} from '../add-country/add-country.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {RepositoryService } from '@core/services/repository.service';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';
import {CountryInfo} from '../../model/countryInfo';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { DialogFruitComponent } from '../../material/dialog/dialog.component';
import { DeleteCountryComponent } from '../delete-country/delete-country.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UpdateCountryComponent } from '../update-country/update-country.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  public displayedColumns = ['Name', 'Short_Name', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<CountryInfo>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, {static: false}) notification: NotificationCompoComponent;

  constructor(private repoService: RepositoryService, private matDialog: MatDialog) {
  }

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  ngOnInit() {
    this.getAllCountries();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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

  deleteCountryRow(short_name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { short_name: short_name };
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

  UpdateCountry(element){

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
