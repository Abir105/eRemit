import { DayAndExchangeHouseWiseBEFTNSendReportComponent } from './day-and-exchange-house-wise-beftn-send-report/day-and-exchange-house-wise-beftn-send-report.component';
import { WebsiteCashPaymentSummaryComponent } from './website-cash-payment-summary/website-cash-payment-summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelWiseReportsComponent } from './excel-wise-reports/excel-wise-reports.component';
import { BranchCashPaymentSummaryComponent } from './branch-cash-payment-summary/branch-cash-payment-summary.component';


const routes: Routes = [
  { path: 'excel-report', component: ExcelWiseReportsComponent },
  { path: 'branch-cash-payment-summary', component: BranchCashPaymentSummaryComponent },
  { path: 'website-cash-payment-summary', component: WebsiteCashPaymentSummaryComponent },
  { path: 'day&exchange-house-BEFTN-send-report', component: DayAndExchangeHouseWiseBEFTNSendReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
