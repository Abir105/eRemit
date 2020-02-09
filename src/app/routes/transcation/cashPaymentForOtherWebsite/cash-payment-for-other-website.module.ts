import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '@shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { ThemeModule } from '../../../theme/theme.module';
import { CashPaymentForOtherWebsiteCreateComponent} from './cash-payment-for-other-website-create/cash-payment-for-other-website-create.component';
import { CashPaymentForOtherWebsiteService} from '@core/services/cash-payment-for-other-website.service';
import { CashPaymentForOtherWebsiteRoutingModule} from './cash-payment-for-other-website-routing.module';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { CountryModule } from '../../config/country/country.module';

const COMPONENTS = [CashPaymentForOtherWebsiteCreateComponent];
const COMPONENTS_DYNAMIC = [ CashPaymentForOtherWebsiteCreateComponent, ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, CashPaymentForOtherWebsiteCreateComponent],
  imports: [SharedModule, CashPaymentForOtherWebsiteRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule, MatSortModule,
    ToastrModule.forRoot({
        closeButton: true,
      },
    ), CountryModule],
  providers: [CashPaymentForOtherWebsiteService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule,
    MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule, CashPaymentForOtherWebsiteCreateComponent],
})
export class CashPaymentForOtherWebsiteModule { }


