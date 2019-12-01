import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimestampRoutingModule } from './timestamp-routing.module';
import { TimestampComponentComponent } from './timestamp-component/timestamp-component.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [TimestampComponentComponent],
  imports: [
    CommonModule,
    TimestampRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MaterialModule
  ],
})
export class TimestampModule { }
