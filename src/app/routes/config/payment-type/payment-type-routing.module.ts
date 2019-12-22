import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentTypeListComponent } from './payment-type-list/payment-type-list.component';


const routes: Routes = [
  { path: '', component: PaymentTypeListComponent},
  { path: 'list', component: PaymentTypeListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTypeRoutingModule { }
