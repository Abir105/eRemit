import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchInfoRoutingModule } from './branch-info-routing.module';
import { BranchListComponent } from './branch-list/branch-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { BranchCreateComponent } from './branch-create/branch-create.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CountryModule } from '../country/country.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { BranchUpdateComponent } from './branch-update/branch-update.component';
import { BranchDeleteComponent } from './branch-delete/branch-delete.component';


@NgModule({
  declarations: [BranchListComponent, BranchCreateComponent, BranchUpdateComponent, BranchDeleteComponent],
  imports: [
    CommonModule,
    BranchInfoRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    CountryModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
})
export class BranchInfoModule { }
