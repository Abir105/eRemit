import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeHouseListComponent } from './exchange-house-list/exchange-house-list.component';
import { ExchangeHouseAddComponent } from './exchange-house-add/exchange-house-add.component';
import { ExchangeHouseDeleteComponent } from './exchange-house-delete/exchange-house-delete.component';
import { ExchangeHouseUpdateComponent } from './exchange-house-update/exchange-house-update.component';


const routes: Routes = [
  { path: 'exchangeHouseList', component: ExchangeHouseListComponent },
  {path: 'exchangeHouseAdd', component: ExchangeHouseAddComponent},
  {path: 'exchangeHouseUpdate', component: ExchangeHouseUpdateComponent},
  {path: 'exchangeHouseDelete', component: ExchangeHouseDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeHouseSetupRoutingModule { }
