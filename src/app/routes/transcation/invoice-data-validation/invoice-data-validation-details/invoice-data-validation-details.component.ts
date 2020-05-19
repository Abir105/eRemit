import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-data-validation-details',
  templateUrl: './invoice-data-validation-details.component.html',
  styleUrls: ['./invoice-data-validation-details.component.scss']
})
export class InvoiceDataValidationDetailsComponent implements OnInit {
  club: [];
  public displayedColumns = [
    'Transaction_Id',
    'Account_No',
    'Transaction_Date',
    'Transaction_No',
    'Status',
    'Amount'
  ];
  constructor() { }

  ngOnInit() {
  }

}
