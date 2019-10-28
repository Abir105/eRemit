import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'list', component: CountryListComponent },
  { path: 'delete', component: DeleteCountryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
