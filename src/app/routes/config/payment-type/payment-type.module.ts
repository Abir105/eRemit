import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { PaymentTypeListComponent } from './payment-type-list/payment-type-list.component';
import { PaymentTypeAddComponent } from './payment-type-add/payment-type-add.component';
import { PaymentTypeUpdateComponent } from './payment-type-update/payment-type-update.component';
import { PaymentTypeDeleteComponent } from './payment-type-delete/payment-type-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../../material.module';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaymentTypeListComponent, PaymentTypeAddComponent, PaymentTypeUpdateComponent, PaymentTypeDeleteComponent],
  imports: [
    CommonModule,
    PaymentTypeRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
  ]
})
export class PaymentTypeModule { }
