import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from '../country/country-list/country-list.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { DeleteCountryComponent } from '../country/delete-country/delete-country.component';
import { DeleteCurrencyComponent } from './delete-currency/delete-currency.component';


const routes: Routes = [
  { path: '', component: CurrencyListComponent},
  { path: 'list', component: CurrencyListComponent},
  { path: 'delete', component: DeleteCurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
