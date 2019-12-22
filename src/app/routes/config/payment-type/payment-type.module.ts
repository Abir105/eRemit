import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { PaymentTypeListComponent } from './payment-type-list/payment-type-list.component';
import { PaymentTypeAddComponent } from './payment-type-add/payment-type-add.component';
import { PaymentTypeUpdateComponent } from './payment-type-update/payment-type-update.component';
import { PaymentTypeDeleteComponent } from './payment-type-delete/payment-type-delete.component';


@NgModule({
  declarations: [PaymentTypeListComponent, PaymentTypeAddComponent, PaymentTypeUpdateComponent, PaymentTypeDeleteComponent],
  imports: [
    CommonModule,
    PaymentTypeRoutingModule
  ]
})
export class PaymentTypeModule { }
