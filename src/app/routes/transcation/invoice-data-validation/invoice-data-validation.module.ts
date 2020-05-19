import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ThemeModule } from '../../../theme/theme.module';
import { ToastrModule } from 'ngx-toastr';
import { CountryModule } from '../../config/country/country.module';
import { InvoiceDataValidationComponent } from './invoice-data-validation/invoice-data-validation.component';
import { InvoiceDataValidationService } from '@core/services/invoice-data-validation.service';
import { InvoiceDataValidationRoutingModule } from './invoice-data-validation-routing.module';
import { InvoiceDataValidationDetailsComponent } from './invoice-data-validation-details/invoice-data-validation-details.component';
import { InvoiceReleaseStatusComponent } from './invoice-release-status/invoice-release-status.component';


const COMPONENTS = [InvoiceDataValidationComponent];
const COMPONENTS_DYNAMIC = [ InvoiceDataValidationComponent, ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, InvoiceDataValidationComponent, InvoiceDataValidationDetailsComponent, InvoiceReleaseStatusComponent],
  imports: [SharedModule, InvoiceDataValidationRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule, MatSortModule,
    ToastrModule.forRoot({
        closeButton: true,
      },
    ), CountryModule],
  providers: [InvoiceDataValidationService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule,
    MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule, InvoiceDataValidationComponent],
})
export class InvoiceDataValidationModule { }
