import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CurrencyInfo } from '../../../model/currencyInfo';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { AccountNatureService } from '@core/services/account-nature.service';
import { AccountNatureDeleteComponent } from '../account-nature-delete/account-nature-delete.component';
import { AccountNatureCreateComponent } from '../account-nature-create/account-nature-create.component';
import { ToastrService } from 'ngx-toastr';
import { AccountNatureUpdateComponent } from '../account-nature-update/account-nature-update.component';

@Component({
  selector: 'app-account-nature-list',
  templateUrl: './account-nature-list.component.html',
  styleUrls: ['./account-nature-list.component.scss']
})
export class AccountNatureListComponent implements OnInit {
  public dataSource: MatTableDataSource<CurrencyInfo>;
  private dialogRef: any;
  public displayedColumns: string[] = ['sl', 'account_nature', 'full_name', 'create_by', 'create_date', 'update', 'delete'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor(private accountableService: AccountNatureService, public dialog: MatDialog, private toastr: ToastrService) {

  }
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };

  ngOnInit() {
    this.getAllAccountNature();
  }

  public getAllAccountNature = () => {
    this.accountableService.getData('currency')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };

  deleteCurrencyRow(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id};
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AccountNatureDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Currency Deleted successfully');
        this.getAllAccountNature();
      } else {
        this.notification.errorsmsg('Sorry! Currency   not Deleted');
      }
    });
  }

  UpdateAccountNature(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    console.log(element);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '350px';
    dialogConfig.width = '400px';
    this.dialogRef = this.dialog.open(AccountNatureUpdateComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Currency Updated successfully');
        this.getAllAccountNature();
      } else {
        this.notification.errorsmsg('Sorry! Currency not Updated');
      }
    });
  }

  addNew(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: 'some name' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AccountNatureCreateComponent, {
      height: '350px',
      width: '400px',
      autoFocus: false,
      disableClose: true,
    });
    this.dialogRef.afterClosed().subscribe(value => {
      console.log(value , 'value');
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success(' Currency  Added successfully');
        this.getAllAccountNature();
      } else {
        this.notification.errorsmsg('Sorry! Currency not Added');
      }
    });
  }

}
