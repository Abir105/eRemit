import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeftnAmendmentComponent } from './beftn-amendment/beftn-amendment.component';
import { BeftnResendComponent } from './beftn-resend/beftn-resend.component';


const routes: Routes = [
  { path: 'cashPaymentForOtherWebsite', loadChildren: () => import('./cashPaymentForOtherWebsite/cash-payment-for-other-website.module').then(m => m.CashPaymentForOtherWebsiteModule) },
  { path: 'beftnAmendment', component: BeftnAmendmentComponent },
  { path: 'beftnResend', component: BeftnResendComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranscationRoutingModule { }
