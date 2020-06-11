import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportsRoutingModule } from './reports-routing.module';
import { ExcelWiseReportsComponent } from './excel-wise-reports/excel-wise-reports.component';
import { MaterialModule } from 'app/material.module';
import { BranchCashPaymentSummaryComponent } from './branch-cash-payment-summary/branch-cash-payment-summary.component';

// ngx-print package import
import { NgxPrintModule } from 'ngx-print';

import { WebsiteCashPaymentSummaryComponent } from './website-cash-payment-summary/website-cash-payment-summary.component';
import { PrintReportModalPopupComponent } from './print-report-modal-popup/print-report-modal-popup.component';
import { DayAndExchangeHouseWiseBEFTNSendReportComponent } from './day-and-exchange-house-wise-beftn-send-report/day-and-exchange-house-wise-beftn-send-report.component';


@NgModule({
  declarations: [ExcelWiseReportsComponent, BranchCashPaymentSummaryComponent, WebsiteCashPaymentSummaryComponent, PrintReportModalPopupComponent, DayAndExchangeHouseWiseBEFTNSendReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPrintModule
  ],
  entryComponents: [PrintReportModalPopupComponent]
})
export class ReportsModule { }
