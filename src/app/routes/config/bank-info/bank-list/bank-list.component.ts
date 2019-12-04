import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { BankInfo } from '../../../model/BankInfo';
import { BankService } from '@core/services/bank.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteCountryComponent } from '../../country/delete-country/delete-country.component';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { CountryService } from '@core/services/country.service';
import { BankDeleteComponent } from '../bank-delete/bank-delete.component';


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
    dataSource: MatTableDataSource<BankInfo>;
    displayedColumns: string[] = ['sl', 'fullName', 'shortName', 'swiftCode', 'reportName', 'details', 'update', 'delete'];
  private dialogRef: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
   constructor(private bankService: BankService, public dialog: MatDialog) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getAllBanks();
  }
  public getAllBanks = () => {
    this.bankService.getData('bank')
      .subscribe(res  => {
        this.dataSource = res.data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource.paginator, 'bank list' );
      });
  };
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBankRow(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(BankDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      //  console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Country Deleted successfully');
        this.getAllBanks();
      } else {
        this.notification.errorsmsg('Sorry! Country not Deleted');
      }
    });
  }

}
