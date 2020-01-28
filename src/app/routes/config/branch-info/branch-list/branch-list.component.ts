import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BankService } from '@core/services/bank.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BranchDeleteComponent } from '../branch-delete/branch-delete.component';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  selectedBank = 0;
  displayedColumns: string[] = ['fullName', 'shortName', 'routingNo', 'reportName', 'swiftCode', 'details', 'update', 'delete'];
  private dialogRef: any;
  dataSource: MatTableDataSource<any>;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private bankData: any;
  private branch: Subscription;
  private branchDetailsDatabyId: any;


  constructor(private bankService: BankService , public dialog: MatDialog, private toastr: ToastrService) {}

  ngOnInit() {
    this.getAllBanks();
  }
  public getAllBanks = () => {
    this.bankService.getData('bank')
      .subscribe(res  => {
        this.bankData = res.data;
      });
  };
  onSelect(id) {
    this.selectedBank = id;
    this.getBranchList(id);
  }
  private getBranchList(id: string) {
    this.branch = this.bankService.getBranchByBankCode(id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  private deleteBranchRow(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(BranchDeleteComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(value => {
      const obj = JSON.parse(value);
      const affectedRows = obj.data.affectedRows;
      if (affectedRows === 1) {
        this.toastr.success('Branch  Deleted successfully');
        // this.notification.successmsg('Branch  Deleted successfully');
        this.getBranchList(id);
      } else {
        this.notification.errorsmsg('Sorry! Branch not Deleted');
      }
    });
  }


}
