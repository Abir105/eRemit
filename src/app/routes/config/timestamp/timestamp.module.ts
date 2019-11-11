import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimestampRoutingModule } from './timestamp-routing.module';
import { TimestampComponentComponent } from './timestamp-component/timestamp-component.component';


@NgModule({
  declarations: [TimestampComponentComponent],
  imports: [
    CommonModule,
    TimestampRoutingModule
  ]
})
export class TimestampModule { }
