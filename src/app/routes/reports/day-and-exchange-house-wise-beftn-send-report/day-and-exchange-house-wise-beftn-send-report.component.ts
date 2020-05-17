import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PrintReportModalPopupComponent } from '../print-report-modal-popup/print-report-modal-popup.component';

// variable declarations

interface ExchangeHouseCode {
  value: string;
  viewValue: string;
}


interface Employee {
  value: string;
  viewValue: string;
}


interface ReportFormValue {
  exchangeHouseCode: string;
  invoiceDate: string;
  excelNo: string;
}


@Component({
  selector: 'app-day-and-exchange-house-wise-beftn-send-report',
  templateUrl: './day-and-exchange-house-wise-beftn-send-report.component.html',
  styleUrls: ['./day-and-exchange-house-wise-beftn-send-report.component.scss']
})
export class DayAndExchangeHouseWiseBEFTNSendReportComponent implements OnInit {

   // static value for now and will come from two different db table

   conditionValue = '';
   branchCashPaymentSummary = [
     { value: 'sajid', testValue: 12 },
     { value: 'mahboob', testValue: 12 },
     { value: 'upal', testValue: 12 },
     { value: 'sajid', testValue: 12 },
     { value: 'mahboob', testValue: 12 },
     { value: 'upal', testValue: 12 },
     { value: 'sajid', testValue: 12 },
     { value: 'mahboob', testValue: 12 },
     { value: 'upal', testValue: 12 },
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

   employeeCode: Employee[] = [
     { value: 'sajid', viewValue: 'Sajid' },
     { value: 'mahboob', viewValue: 'Mahboob' },
     { value: 'upal', viewValue: 'Upal' }
   ];

   // -----------------------end--------------------------------------

  constructor(private dialog: MatDialog) { }


  // clear the form value
  clearForm(frm) {
    frm.resetForm();
  }

  // woriking on material popup module

  openDialog(passedValue, conditionValue) {
    const config: MatDialogConfig = {
      width: '1000px',
      data: { passedValue, conditionValue },
    };
    this.dialog.open(PrintReportModalPopupComponent, config);
  }



  // search pdf tables information on basis of search values

  searchBranchCashPaymentSummary(frm) {
    console.log(frm.value);
    this.conditionValue = 'day&exchangehouse-wise-beftn-report';
    this.openDialog(this.branchCashPaymentSummary, this.conditionValue);
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
