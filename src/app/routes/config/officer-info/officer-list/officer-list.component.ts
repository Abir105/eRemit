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
import { OfficerUpdateComponent } from '../officer-update/officer-update.component';


@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {


  public displayedColumns = ['employeeCode', 'status', 'employeeName', 'emailAddress', 'phoneNumber',  'update', 'delete'];
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
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.matDialog.open(OfficerAddComponent, {
      height: '480px',
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


  UpdateOfficer(element) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '400px';
    this.dialogRef = this.matDialog.open(OfficerUpdateComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Officer  Updated successfully');
        this.getAllOfficers();
      } else {
        this.notification.errorsmsg('Sorry! Officer not Updated');
      }
    });
  }
  deleteOfficerRow( id: string) {
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
        this.notification.errorsmsg('Sorry! Officer not Deleted');
      }
    });
  }

}
