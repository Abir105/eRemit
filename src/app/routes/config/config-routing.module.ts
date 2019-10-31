import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'currency', component: CurrencyComponent, data: { title: 'Ng Select' } },
  { path: 'country', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) },
  { path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
