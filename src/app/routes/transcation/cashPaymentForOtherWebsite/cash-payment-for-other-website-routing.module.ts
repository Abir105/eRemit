import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashPaymentForOtherWebsiteCreateComponent } from './cash-payment-for-other-website-create/cash-payment-for-other-website-create.component';

const routes: Routes = [
  { path: '', component: CashPaymentForOtherWebsiteCreateComponent},
  { path: 'create', component: CashPaymentForOtherWebsiteCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CashPaymentForOtherWebsiteRoutingModule { }
