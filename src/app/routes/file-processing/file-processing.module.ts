import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { MaterialModule} from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CountryModule } from '../config/country/country.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddFileProcessingComponent } from './add-file-processing/add-file-processing.component';
import { FileProcessingRoutingModule } from './file-processing-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { CompletedBatchesComponent } from './completed-batches/completed-batches.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatGridListModule } from '@angular/material/grid-list';
import { OrderModule } from 'ngx-order-pipe';




@NgModule({
  declarations: [AddFileProcessingComponent, CompletedBatchesComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FileProcessingRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CountryModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MaterialModule,
    MatStepperModule,
    CKEditorModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    MatGridListModule,
    OrderModule,
  ],
})
export class FileProcessingModule { }
