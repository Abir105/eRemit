import { strings } from '@angular-devkit/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, OnChanges } from '@angular/core';
import { PrintReportModalPopupComponent } from '../print-report-modal-popup/print-report-modal-popup.component';
import { ReportsService } from '@core/services/reports.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-excel-wise-reports',
  templateUrl: './excel-wise-reports.component.html',
  styleUrls: ['./excel-wise-reports.component.scss']
})
export class ExcelWiseReportsComponent implements OnInit {

  // static value for now and will come from two different db table

  conditionValue = '';
  // excelWiseReportList = [
  //   { value: 'sajid', testValue: 1200000 },
  //   { value: 'mahboob', testValue: 130000 },
  //   { value: 'upal', testValue: 14 },
  //   { value: 'sajid', testValue: 120000000000 },
  //   { value: 'mahboob', testValue: 13 },
  //   { value: 'upal', testValue: 14 },
  //   { value: 'sajid', testValue: 200000 },
  //   { value: 'mahboob', testValue: 130000 },
  //   { value: 'upal', testValue: 14 },
  //   { value: 'sajid', testValue: 1200000 },
  //   { value: 'mahboob', testValue: 130000 },
  //   { value: 'upal', testValue: 14 },
  //   { value: 'sajid', testValue: 1200000 },
  //   { value: 'mahboob', testValue: 130000 },
  //   { value: 'upal', testValue: 14 },
  // ];
  excelWiseReportList = [];
  exchangeHouseCode = [];

  excelNo = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  // -----------------------end--------------------------------------

  constructor(private dialog: MatDialog, private reportsService: ReportsService, private datePipe: DatePipe) { }


  // woriking on material popup module
  openDialog(passedValue, conditionValue) {
    console.log('from opendialog function', passedValue);
    const config: MatDialogConfig = {
      width: '1000px',
      data: { passedValue, conditionValue },
    };
    this.dialog.open(PrintReportModalPopupComponent, config);
  }


  // get exchange house code from api
  getExchangeHouseCodes() {
    this.reportsService.getExchangeHosueNameAndCode()
      .subscribe(items => {
        // console.log(items);
        this.exchangeHouseCode = items;
        // console.log('the value of exchange house codes are: ' + this.exchangeHouseCode);
      });
  }


  // updateValue function
  // updateValue(items) {
  //   this.excelWiseReportList = items;
  //   return this.excelWiseReportList;
  // }


  // search pdf tables information on basis of search values
  searchExcelWiseInvoiceStatus(frm) {
    // console.log(frm.value.invoiceDate);
    let exchangeHosueCode = frm.value.exchangeHouseCode;
    let excelNo = frm.value.excelNo;
    let Date = this.datePipe.transform(frm.value.invoiceDate, 'yyyy-MM-dd');

    this.reportsService.getExcelWiseReport(exchangeHosueCode, excelNo, Date)
      .subscribe(items => {
        this.excelWiseReportList = items;
        console.log('value from component', this.excelWiseReportList);
        this.conditionValue = 'excel-wise-report';
        this.openDialog(this.excelWiseReportList, this.conditionValue);
        frm.resetForm();
      });
  }

  // -----------------------------end----------------------------------

  ngOnInit() {
    this.getExchangeHouseCodes();
  }

}
