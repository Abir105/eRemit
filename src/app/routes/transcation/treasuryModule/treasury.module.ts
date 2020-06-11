import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '@shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { ThemeModule } from '../../../theme/theme.module';
import { CountryModule } from '../../config/country/country.module';
import { TreasuryComponent } from './treasury/treasury.component';
import { TreasuryRoutingModule } from './treasury-routing.module';
import { TreasuryService } from '@core/services/treasury.service';
import { TreasuryDeleteComponent } from './treasury-delete/treasury-delete.component';
import { TreasuryUpdateComponent } from './treasury-update/treasury-update.component';

const COMPONENTS = [TreasuryComponent];
const COMPONENTS_DYNAMIC = [ TreasuryComponent,TreasuryDeleteComponent, TreasuryUpdateComponent,  ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, TreasuryComponent, TreasuryDeleteComponent, TreasuryUpdateComponent],
  imports: [
    SharedModule,
    TreasuryRoutingModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    ThemeModule,
    MatSortModule,
    ToastrModule.forRoot({
        closeButton: true,
      },
    ), CountryModule],
  providers: [TreasuryService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    TreasuryComponent,
    TreasuryDeleteComponent,
    TreasuryUpdateComponent
  ],
})
export class TreasuryModule { }
