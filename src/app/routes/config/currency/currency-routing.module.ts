import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from '../country/country-list/country-list.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';


const routes: Routes = [
  { path: '', component: CurrencyListComponent},
  { path: 'list', component: CurrencyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
