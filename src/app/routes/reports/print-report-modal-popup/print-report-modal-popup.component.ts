import { element } from 'protractor';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

// import for excel file download
import * as XLSX from 'xlsx';

// import package for pdf format file
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-print-report-modal-popup',
  templateUrl: './print-report-modal-popup.component.html',
  styleUrls: ['./print-report-modal-popup.component.scss']
})
export class PrintReportModalPopupComponent implements OnInit {

  // @ViewChild('pdfsave') content: ElementRef;
  excelFileName = 'ExcelSheet.xlsx';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  // summation of total amount of the 'Amount' column

  getSum(column): number {
    let sum = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.data.passedValue.length; i++) {
      sum += this.data.passedValue[i][column];
    }
    return sum;
  }

  // -------------------end-------------------------------



  // save report as PDF format

  public savePDF(): void {
    // let doc = new jsPDF();

    // let specialElementHandlers = {
    //   '#editor': function (element, renderer) {
    //     return true;
    //   }
    // };

    // let content = this.pdfsave.nativeElement;
    // const element = document.getElementById('pdfsaves');
    // doc.fromHTML(element, 15, 15, {
    //   'width': 190,
    //   // 'elementHandlers': specialElementHandlers
    // });

    // doc.save('test.pdf');

  }

  // ------------------end---------------------



  // save report as excel file

  exportexcel(): void {
    /* table id is passed over here */
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.excelFileName);

  }

  // --------------------end------------------

  ngOnInit() {
  }

}
