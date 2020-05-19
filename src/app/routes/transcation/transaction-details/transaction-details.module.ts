import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '@shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { ThemeModule } from '../../../theme/theme.module';
import { CountryModule } from '../../config/country/country.module';
import { TransactionDetailsRoutingModule } from './transaction-details-routing.module';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionDetailsService } from '@core/services/transaction-details.service';
import { TransactionDetailsListComponent } from './transaction-details-list/transaction-details-list.component';

const COMPONENTS = [TransactionDetailsComponent];
const COMPONENTS_DYNAMIC = [TransactionDetailsComponent,TransactionDetailsListComponent];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC,TransactionDetailsComponent, TransactionDetailsListComponent ],
  imports: [
    SharedModule,
    TransactionDetailsRoutingModule,
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
  providers: [TransactionDetailsService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    TransactionDetailsComponent,
    TransactionDetailsListComponent
  ],
})
export class TransactionDetailsModule { }
