import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'currency', component: CurrencyComponent, data: { title: 'Ng Select' } },
  { path: 'country', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) },
  { path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) },
  { path: 'time', loadChildren: () => import('./timestamp/timestamp.module').then(m => m.TimestampModule) },
  { path: 'bank', loadChildren: () => import('./bank-info/bank-info.module').then(m => m.BankInfoModule) },
  { path: 'officer', loadChildren: () => import('./officer-info/officer-info.module').then(m => m.OfficerInfoModule) },
  { path: 'paymentType', loadChildren: () => import('./payment-type/payment-type.module').then(m => m.PaymentTypeModule) },
  { path: 'branch', loadChildren: () => import('./branch-info/branch-info.module').then(m => m.BranchInfoModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
