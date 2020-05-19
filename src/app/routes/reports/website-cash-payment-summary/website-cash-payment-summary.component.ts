import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { PrintReportModalPopupComponent } from '../print-report-modal-popup/print-report-modal-popup.component';

// variable declarations

interface ExchangeHouseCode {
  value: string;
  viewValue: string;
}


interface ReportFormValue {
  exchangeHouseCode: string;
  invoiceDate: string;
  excelNo: string;
}


// interface ExcelWiseReportList {
//   value: string;
//   testValue: number;
// }

// -----------------------end----------------------------

@Component({
  selector: 'app-website-cash-payment-summary',
  templateUrl: './website-cash-payment-summary.component.html',
  styleUrls: ['./website-cash-payment-summary.component.scss']
})
export class WebsiteCashPaymentSummaryComponent implements OnInit {

  // static value for now and will come from two different db table

  conditionValue = '';
  websiteCashPaymentSummary = [
    { value: 'sajid', testValue: 120 },
    { value: 'mahboob', testValue: 120 },
    { value: 'upal', testValue: 120 },
    { value: 'sajid', testValue: 120 },
    { value: 'mahboob', testValue: 120 },
    { value: 'upal', testValue: 120 },
    { value: 'sajid', testValue: 120 },
    { value: 'mahboob', testValue: 120 },
    { value: 'upal', testValue: 120 },
    { value: 'sajid', testValue: 12 },
    { value: 'mahboob', testValue: 12 },
    { value: 'upal', testValue: 12 },
    { value: 'sajid', testValue: 12 },
    { value: 'mahboob', testValue: 12 },
    { value: 'upal', testValue: 12 },
  ];

  exchangeHouseCode: ExchangeHouseCode[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  // -----------------------end--------------------------------------

  constructor(private dialog: MatDialog) { }

  // woriking on material popup module

  openDialog(passedValue, conditionValue) {
    const config: MatDialogConfig = {
      width: '1000px',
      data: { passedValue, conditionValue },
    };
    this.dialog.open(PrintReportModalPopupComponent, config);
  }




  // search pdf tables information on basis of search values

  searchWebsiteCashPaymentSummary(frm) {
    console.log(frm.value);
    console.log(frm.value);
    this.conditionValue = 'website-cash-payment-summary';
    this.openDialog(this.websiteCashPaymentSummary, this.conditionValue);
    frm.resetForm();
    // let newItem: ReportFormValue = {
    //   exchangeHouseCode: frm.value.itemName,
    //   invoiceDate: frm.value.itemQuantity,
    //   excelNo: frm.value.excelNo,
    // };
    // this.showSpinner = true;
    // setTimeout(() => {
    //   this.showSpinner = false;
    // }, 5000);

    // this.dataService.addShoppingItem(newItem)
    //   .subscribe(item => {
    //     console.log(item);
    //     this.getItems();
    //   });
  }

  // -----------------------------end----------------------------------


  ngOnInit() {
  }

}
