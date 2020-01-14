import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTypeRoutingModule } from './account-type-routing.module';
import { AccountTypeCreateComponent } from './account-type-create/account-type-create.component';
import { AccountTypeUpdateComponent } from './account-type-update/account-type-update.component';
import { AccountTypeDeleteComponent } from './account-type-delete/account-type-delete.component';
import { AccountTypeListComponent } from './account-type-list/account-type-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatPaginatorModule, MatTableModule, MatTabsModule,

} from '@angular/material';
import { CountryModule } from '../country/country.module';


@NgModule({
  declarations: [AccountTypeCreateComponent, AccountTypeUpdateComponent, AccountTypeDeleteComponent, AccountTypeListComponent],
  imports: [
    CommonModule,
    AccountTypeRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    CountryModule,
  ],
})
export class AccountTypeModule { }
