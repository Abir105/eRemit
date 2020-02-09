import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '@shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { ThemeModule } from '../../../theme/theme.module';
import { IncentiveService } from '@core/services/incentive.service';
import { IncentivePolicyRoutingModule } from './incentive-policy-routing.module';
import { IncentiveListComponent } from './incentive-list/incentive-list.component';
import { AddIncentiveComponent } from './add-incentive/add-incentive.component';
import { DeleteIncentiveComponent } from './delete-incentive/delete-incentive.component';
import { UpdateIncentiveComponent } from './update-incentive/update-incentive.component';
import { CountryModule } from '../country/country.module';


const COMPONENTS = [IncentiveListComponent];
const COMPONENTS_DYNAMIC = [AddIncentiveComponent, DeleteIncentiveComponent, UpdateIncentiveComponent];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, IncentiveListComponent, AddIncentiveComponent, DeleteIncentiveComponent, UpdateIncentiveComponent],
  imports: [SharedModule, IncentivePolicyRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule, MatSortModule,
    ToastrModule.forRoot({
        closeButton: true,
      },
    ), CountryModule],
  providers: [IncentiveService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule, MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule, AddIncentiveComponent,
    IncentiveListComponent, DeleteIncentiveComponent, UpdateIncentiveComponent],
})
export class IncentivePolicyModule { }


