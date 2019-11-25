import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankInfoRoutingModule } from './bank-info-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { BankCreateComponent } from './bank-create/bank-create.component';
import { CountryModule } from '../country/country.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [BankListComponent, BankCreateComponent],
  imports: [
    CommonModule,
    BankInfoRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CountryModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
  ],
})
export class BankInfoModule { }
