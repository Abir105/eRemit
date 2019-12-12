import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BankInfo } from '../../../model/BankInfo';
import { BankService } from '@core/services/bank.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { BankDeleteComponent } from '../bank-delete/bank-delete.component';



@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
   public dataSource: MatTableDataSource<BankInfo>;
   public displayedColumns: string[] = ['sl', 'fullName', 'shortName', 'swiftCode', 'reportName', 'details', 'update', 'delete'];
   private dialogRef: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
   constructor(private bankService: BankService, public dialog: MatDialog) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };

  ngOnInit() {
    this.getAllBanks();
  }
  public getAllBanks = () => {
    this.bankService.getData('bank')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };

  deleteBankRow(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(BankDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Bank Deleted successfully');
        this.getAllBanks();
      } else {
        this.notification.errorsmsg('Sorry! Bank not Deleted');
      }
    });
  }

}
