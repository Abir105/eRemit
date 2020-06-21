import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileProcessingRoutingModule } from './file-processing-routing.module';
import { FileProcessingAddComponent } from './file-processing-add/file-processing-add.component';
import { IncompletedBatchesComponent } from './incompleted-batches/incompleted-batches.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatPaginatorModule,
  MatStepperModule,
  MatTabsModule,
} from '@angular/material';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ FileProcessingAddComponent, IncompletedBatchesComponent],
  imports: [
    CommonModule,
    FileProcessingRoutingModule,

    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatPaginatorModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class FileProcessingModule { }
