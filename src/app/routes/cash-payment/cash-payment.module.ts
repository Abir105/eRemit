import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashPaymentRoutingModule } from './cash-payment-routing.module';
import { CashPaymentAddComponent } from './cash-payment-add/cash-payment-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CountryModule } from '../config/country/country.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [CashPaymentAddComponent],
  imports: [
    CommonModule,
    CashPaymentRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    CountryModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
  ],
})
export class CashPaymentModule { }
