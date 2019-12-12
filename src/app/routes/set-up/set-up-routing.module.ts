import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeHouseSetupComponent } from './exchange-house-setup/exchange-house-setup.component';


const routes: Routes = [
  { path: 'exchangehouse', component: ExchangeHouseSetupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetUpRoutingModule { }
