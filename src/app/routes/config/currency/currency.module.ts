import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { DeleteCurrencyComponent } from './delete-currency/delete-currency.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CountryListComponent } from '../country/country-list/country-list.component';
import { AddCountryComponent } from '../country/add-country/add-country.component';
import { DeleteCountryComponent } from '../country/delete-country/delete-country.component';
import { UpdateCountryComponent } from '../country/update-country/update-country.component';

const COMPONENTS = [CurrencyListComponent];
const COMPONENTS_DYNAMIC = [AddCurrencyComponent];


@NgModule({
  declarations: [AddCurrencyComponent, CurrencyListComponent, DeleteCurrencyComponent, UpdateCurrencyComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    MatTooltipModule,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    CurrencyRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class CurrencyModule { }
