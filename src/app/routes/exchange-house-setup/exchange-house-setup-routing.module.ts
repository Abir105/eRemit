import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeHouseListComponent } from './exchange-house-list/exchange-house-list.component';
import { ExchangeHouseAddComponent } from './exchange-house-add/exchange-house-add.component';
import { ExchangeHouseDeleteComponent } from './exchange-house-delete/exchange-house-delete.component';
import { ExchangeHouseUpdateComponent } from './exchange-house-update/exchange-house-update.component';


const routes: Routes = [
  { path: '', component: ExchangeHouseListComponent },
  {path: 'add', component: ExchangeHouseAddComponent},
  {path: 'update', component: ExchangeHouseUpdateComponent},
  {path: 'delete', component: ExchangeHouseDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeHouseSetupRoutingModule { }
