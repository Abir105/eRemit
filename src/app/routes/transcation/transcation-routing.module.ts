import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cashPaymentForOtherWebsite', loadChildren: () => import('./cashPaymentForOtherWebsite/cash-payment-for-other-website.module').then(m => m.CashPaymentForOtherWebsiteModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranscationRoutingModule { }
