import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeHouseSetupRoutingModule } from './exchange-house-setup-routing.module';
import { ExchangeHouseListComponent } from './exchange-house-list/exchange-house-list.component';
import { ExchangeHouseAddComponent } from './exchange-house-add/exchange-house-add.component';
import { ExchangeHouseUpdateComponent } from './exchange-house-update/exchange-house-update.component';
import { ExchangeHouseDeleteComponent } from './exchange-house-delete/exchange-house-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CountryModule } from '../config/country/country.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from '../../material.module';
import { MatStepperModule } from '@angular/material/stepper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ExchangeHouseDetailsComponent } from './exchange-house-details/exchange-house-details.component';


@NgModule({
  declarations: [ExchangeHouseListComponent, ExchangeHouseAddComponent, ExchangeHouseUpdateComponent, ExchangeHouseDeleteComponent, ExchangeHouseDetailsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ExchangeHouseSetupRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CountryModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MaterialModule,
    MatStepperModule,
    CKEditorModule
  ],
})
export class ExchangeHouseSetupModule { }
