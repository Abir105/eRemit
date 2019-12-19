import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ExchangeHouseService } from '@core/services/exchange-house.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { ExchangeHouseDeleteComponent } from '../exchange-house-delete/exchange-house-delete.component';

@Component({
  selector: 'app-exchange-house-list',
  templateUrl: './exchange-house-list.component.html',
  styleUrls: ['./exchange-house-list.component.scss']
})
export class ExchangeHouseListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'acDbIns', 'acDbFrom', 'delete'];
  private dialogRef: any;
  dataSource: MatTableDataSource<any>;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private exchangeHouseService: ExchangeHouseService , public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllExchangeHouse();
  }

  public getAllExchangeHouse = () => {
    this.exchangeHouseService.exHouseList('exHouse')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteExHouse(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(ExchangeHouseDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Exchange House Deleted successfully');
        this.getAllExchangeHouse();
      } else {
        this.notification.errorsmsg('Sorry! Exchange House  not Deleted');
      }
    });
  }
}


