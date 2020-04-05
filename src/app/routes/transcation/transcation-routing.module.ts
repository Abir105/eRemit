import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cashPaymentForOtherWebsite', loadChildren: () => import('./cashPaymentForOtherWebsite/cash-payment-for-other-website.module').then(m => m.CashPaymentForOtherWebsiteModule) },
  { path: 'treasuryModule', loadChildren: () => import('./treasuryModule/treasury.module').then(m => m.TreasuryModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranscationRoutingModule { }
