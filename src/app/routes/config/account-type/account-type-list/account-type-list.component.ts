import { Component,  OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CurrencyInfo } from '../../../notificationComp/model/currencyInfo';
import { AccountTypeUpdateComponent } from '../account-type-update/account-type-update.component';
import { AccountTypeService } from '@core/services/account-type.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { AccountTypeDeleteComponent } from '../account-type-delete/account-type-delete.component';
import { AccountTypeCreateComponent } from '../account-type-create/account-type-create.component';


@Component({
  selector: 'app-account-type-list',
  templateUrl: './account-type-list.component.html',
  styleUrls: ['./account-type-list.component.scss']
})
export class AccountTypeListComponent implements OnInit {
  public dataSource: MatTableDataSource<CurrencyInfo>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  private dialogRef: any;
  public displayedColumns: string[] = ['sl', 'ac_type', 'act_desc', 'create_by', 'create_date', 'update', 'delete'];
  constructor(private accounttypeservice: AccountTypeService, public dialog: MatDialog, private toastr: ToastrService) { }
  public doFilter = (value: string) => {
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  };


  ngOnInit() {
    this.getAllAccountType();
  }
  UpdateAccountType(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    console.log(element);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '350px';
    dialogConfig.width = '400px';
    this.dialogRef = this.dialog.open(AccountTypeUpdateComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      console.log(obj);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Account Type Updated successfully');
        this.getAllAccountType();
      } else {
        this.notification.errorsmsg('Sorry! Account Type not Updated');
      }
    });
  }

  public getAllAccountType = () => {
    this.accounttypeservice.getData('accountType')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };
  addAccountType(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: 'account type' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AccountTypeCreateComponent, {
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
        this.toastr.success('Added successfully');
        this.getAllAccountType();
      } else {
        this.notification.errorsmsg('Sorry!not Added');
      }
    });
  }

  deleteAccountType(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id};
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AccountTypeDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.notification.successmsg('Account Type Deleted successfully');
        this.getAllAccountType();
      } else {
        this.notification.errorsmsg('Sorry! Information not Deleted');
      }
    });
  }

}
