import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerInfoRoutingModule } from './officer-info-routing.module';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../../material.module';
import { FlexModule } from '@angular/flex-layout';
import { OfficerAddComponent } from './officer-add/officer-add.component';
import { OfficerUpdateComponent } from './officer-update/officer-update.component';
import { OfficerDeleteComponent } from './officer-delete/officer-delete.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OfficerListComponent, OfficerAddComponent, OfficerUpdateComponent, OfficerDeleteComponent],
  imports: [
    CommonModule,
    OfficerInfoRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
  ],
})
export class OfficerInfoModule { }
