import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USDSellingComponent } from './usdselling/usdselling.component';

const routes: Routes = [
  { path: '', component: USDSellingComponent},
  { path: 'list', component: USDSellingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsdsellingRoutingModule { }
