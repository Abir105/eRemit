import {  Component, OnInit, ViewChild } from '@angular/core';
import { IncentiveService } from '@core/services/incentive.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { AddIncentiveComponent } from '../add-incentive/add-incentive.component';
import { DeleteIncentiveComponent } from '../delete-incentive/delete-incentive.component';
import { UpdateIncentiveComponent } from '../update-incentive/update-incentive.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IncentiveInfo } from '../../../notificationComp/model/IncentiveInfo';

@Component({
  selector: 'app-incentive-list',
  templateUrl: './incentive-list.component.html',
  styleUrls: ['./incentive-list.component.scss']
})
export class IncentiveListComponent implements OnInit {
  public displayedColumns = ['sl', 'incentive_percentage', 'maximum_amount', 'rate', 'balance', 'update', 'delete'];
  public dataSource = new MatTableDataSource<IncentiveInfo>();
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  private incentiveDataLength: any;

  constructor(private incentiveService: IncentiveService, public dialog: MatDialog) {
  }
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  ngOnInit() {
    this.getAllIncentives();
  }

  public getAllIncentives = () => {
    this.incentiveService.getIncentive('incentive_percentage')
      .subscribe(res => {
        this.incentiveDataLength = res.data.length;
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };
  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {  };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AddIncentiveComponent, {
      height: '330px',
      width: '330px',
      autoFocus: false,
      disableClose: true
    });
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Incentive Policy Added successfully');
        this.getAllIncentives();
      } else {
        this.notification.errorsmsg('Sorry! Incentive Policy not Added');
      }
    });
  }


  // tslint:disable-next-line:variable-name
  deleteIncentiveRow(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(DeleteIncentiveComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Incentive Policy Deleted successfully');
        this.getAllIncentives();
      } else {
        this.notification.errorsmsg('Sorry! Incentive Policy not Deleted');
      }
    });
  }


  UpdateIncentive(element) {
     const dialogConfig = new MatDialogConfig();
     dialogConfig.data = element;
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.height = '330px';
     dialogConfig.width = '330px';
     this.dialogRef = this.dialog.open(UpdateIncentiveComponent, dialogConfig);
     this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Incentive policy Updated successfully');
        this.getAllIncentives();
      } else {
        this.notification.errorsmsg('Sorry! Incentive Policy not Updated');
      }
    });
  }
}
