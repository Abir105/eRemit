import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionDetailsService } from '@core/services/transaction-details.service';
import * as xlsx from 'xlsx';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionDetailsInfo } from '../../../notificationComp/model/transactionDetailsInfo';
import { Subscription } from 'rxjs';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  reactiveForm1: FormGroup;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  treansactionDetails = Subscription;
  public dataSource = new MatTableDataSource<TransactionDetailsInfo>();
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  @ViewChild(MatSort, null) sort: MatSort;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  clubs = [
    {

      Company_Prefix: "PRAVU",
      Transaction_No: 111421994421,
      Transaction_Date: '03-MAY-20',
      Beneficiary_Name: 'MIR MOHAMMED SOAWIB',
      Bank_Name: 'BANKASIA',
      Branch_Name:3,
      Routing_No: 58,
      Account_No: 16134001645,
      Amount: 130007,
      Incentive:2,
      Incentive_Amount:700986,
      Total_Amount:456453,
      Payment_Type: 9,
      Remitter_Name: 4,
      Message: "succeed",
      Date:5,
      Details:9,

    },
    {
      Company_Prefix: "PRAVU",
      Transaction_No: 11140005521,
      Transaction_Date: '03-MAY-20',
      Beneficiary_Name: 'JASIM IDDIN SARKER',
      Bank_Name: 'BANKASIA',
      Branch_Name:3,
      Routing_No: 58,
      Account_No: 16134001646,
      Amount: 130007,
      Incentive:2,
      Incentive_Amount:646457,
      Total_Amount:68683,
      Payment_Type: 9,
      Remitter_Name: 4,
      Message: "Failed",
      Date:5,
      Details:9,

    },
    {

      Company_Prefix: "PRAVU",
      Transaction_No: 111421994423,
      Transaction_Date: '03-MAY-20',
      Beneficiary_Name: 'FERDOWSUN  NAHAR',
      Bank_Name: 'BANKASIA',
      Branch_Name:3,
      Routing_No: 58,
      Account_No: 16134001647,
      Amount: 565757,
      Incentive:4,
      Incentive_Amount:213457,
      Total_Amount:67873,
      Payment_Type: 9,
      Remitter_Name: 4,
      Message: "Failed",
      Date:5,
      Details:9,

    },
    {

      Company_Prefix: "PRAVU",
      Transaction_No: 211521994421,
      Transaction_Date: '03-MAY-20',
      Beneficiary_Name: 'MD ALTAF HOSSAIN',
      Bank_Name: 'BANKASIA',
      Branch_Name:3,
      Routing_No: 58,
      Account_No: 16134001649,
      Amount: 6130007,
      Incentive:4,
      Incentive_Amount:8798787,
      Total_Amount:300000,
      Payment_Type: 9,
      Remitter_Name: 4,
      Message: "succeed",
      Date:5,
      Details:9,

    },
    {

      Company_Prefix: "PRAVU",
      Transaction_No: 151421994421,
      Transaction_Date: '03-MAY-20',
      Beneficiary_Name: 'MD ALTAF HOSSAIN',
      Bank_Name: 'BANKASIA',
      Branch_Name:3,
      Routing_No: 58,
      Account_No: 16134001642,
      Amount: 130007,
      Incentive:4,
      Incentive_Amount:754747,
      Total_Amount:3787687,
      Payment_Type: 9,
      Remitter_Name: 4,
      Message: "Failed",
      Date:5,
      Details:9,

    },
  ];
  row: any;


  constructor(public dialog: MatDialog,
              private router: Router,
              private _formBuilder: FormBuilder,
              private fb: FormBuilder,
              private transactionDetailsService: TransactionDetailsService) { }

  ngOnInit() {
    this.reactiveForm1 = this.fb.group({
      ExchangeHouseName: ['',[Validators.required]],
      Exchange_House: ['', [Validators.required]],
      Account_Number: ['', [Validators.required]],
      Treasury_Rate: ['', [Validators.required]],
      Offer_Rate: ['', [Validators.required]],
      Current_Balance: ['', [Validators.required,]],
      Selling_Amount: ['', [Validators.required]],
      Message: ['', [Validators.required]],
toDate: ['',[Validators.required]]
    });
  }
  get toDate() { return this.reactiveForm1.get('toDate'); }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
  }

  onSelect($event: any) {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
