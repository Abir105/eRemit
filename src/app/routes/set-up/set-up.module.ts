import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetUpRoutingModule } from './set-up-routing.module';
import { ExchangeHouseSetupComponent } from './exchange-house-setup/exchange-house-setup.component';


@NgModule({
  declarations: [ExchangeHouseSetupComponent],
  imports: [
    CommonModule,
    SetUpRoutingModule
  ]
})
export class SetUpModule { }
