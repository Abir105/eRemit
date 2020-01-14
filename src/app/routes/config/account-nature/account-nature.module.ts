import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountNatureRoutingModule } from './account-nature-routing.module';
import { AccountNatureUpdateComponent } from './account-nature-update/account-nature-update.component';
import { AccountNatureDeleteComponent } from './account-nature-delete/account-nature-delete.component';
import { AccountNatureListComponent } from './account-nature-list/account-nature-list.component';
import { AccountNatureCreateComponent } from './account-nature-create/account-nature-create.component';

import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatTabsModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { CountryModule } from '../country/country.module';


@NgModule({
  declarations: [ AccountNatureUpdateComponent, AccountNatureDeleteComponent, AccountNatureListComponent, AccountNatureCreateComponent],
  imports: [
    CommonModule,
    AccountNatureRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    ReactiveFormsModule,
    CountryModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class AccountNatureModule { }
