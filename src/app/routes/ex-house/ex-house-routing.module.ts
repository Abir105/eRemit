import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
 // { path: 'country', component: CountryComponent, data: { title: 'Form Elements' } },
  { path: 'currency', component: CurrencyComponent, data: { title: 'Ng Select' } },
  { path: 'country', component: CountryListComponent, data: { title: 'Ng Select' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExHouseRoutingModule { }
