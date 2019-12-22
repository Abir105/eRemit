import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentTypeListComponent } from './payment-type-list/payment-type-list.component';
import { PaymentTypeAddComponent } from './payment-type-add/payment-type-add.component';
import { PaymentTypeDeleteComponent } from './payment-type-delete/payment-type-delete.component';
import { PaymentTypeUpdateComponent } from './payment-type-update/payment-type-update.component';


const routes: Routes = [
  { path: '', component: PaymentTypeListComponent},
  { path: 'list', component: PaymentTypeListComponent},
  { path: 'add', component: PaymentTypeAddComponent},
  { path: 'delete', component: PaymentTypeDeleteComponent},
  { path: 'update', component: PaymentTypeUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTypeRoutingModule { }
