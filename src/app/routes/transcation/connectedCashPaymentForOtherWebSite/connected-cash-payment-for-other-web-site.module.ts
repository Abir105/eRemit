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
import { ConnectedCashPaymentForOtherWebSiteComponent } from './connected-cash-payment-for-other-web-site/connected-cash-payment-for-other-web-site.component';
import { ConnectedCashPaymentForOtherWebSiteService } from '@core/services/connected-cash-payment-for-other-web-site.service';
import { ConnectedCashPaymentForOtherWebSiteRoutingModule } from './connected-cash-payment-for-other-web-site-routing.module';



const COMPONENTS = [ConnectedCashPaymentForOtherWebSiteComponent];
const COMPONENTS_DYNAMIC = [ ConnectedCashPaymentForOtherWebSiteComponent, ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ConnectedCashPaymentForOtherWebSiteComponent],
  imports: [SharedModule, ConnectedCashPaymentForOtherWebSiteRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule, MatSortModule,
    ToastrModule.forRoot({
        closeButton: true,
      },
    ), CountryModule],
  providers: [ConnectedCashPaymentForOtherWebSiteService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule,
    MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule, (ConnectedCashPaymentForOtherWebSiteComponent)],
})
export class ConnectedCashPaymentForOtherWebSiteModule { }
