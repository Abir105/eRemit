import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashPaymentAddComponent } from './cash-payment-add/cash-payment-add.component';


const routes: Routes = [
  { path: '', component: CashPaymentAddComponent },
  {path: 'add', component: CashPaymentAddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashPaymentRoutingModule { }
