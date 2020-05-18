import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { AdministrationRoutingModule } from './administration-routing.module';

const COMPONENTS = [ ];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [ SharedModule, AdministrationRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    ToastrModule.forRoot({
      closeButton: true, })
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule, MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule]
})
export class AdministrationModule { }
