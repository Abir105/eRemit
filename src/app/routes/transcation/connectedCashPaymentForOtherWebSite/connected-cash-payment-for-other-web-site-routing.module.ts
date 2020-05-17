import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedCashPaymentForOtherWebSiteComponent } from './connected-cash-payment-for-other-web-site/connected-cash-payment-for-other-web-site.component';


const routes: Routes = [
  { path: '', component: ConnectedCashPaymentForOtherWebSiteComponent},
  { path: 'create', component: ConnectedCashPaymentForOtherWebSiteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectedCashPaymentForOtherWebSiteRoutingModule { }
