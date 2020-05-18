import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../../../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ThemeModule } from '../../../../theme/theme.module';
import { ToastrModule } from 'ngx-toastr';
import { CountryModule } from '../../../config/country/country.module';
import { TreasuryApprovalComponent } from './treasuryApproval/treasury-approval.component';
import { TreasuryApprovalRoutingModule } from './treasury-approval-routing.module';
import { TreasuryApprovalService } from '@core/services/treasury-approval.service';
import { DeleteTreasuryApprovalComponent } from './delete-treasury-approval/delete-treasury-approval.component';
import { TreasuryApproveComponent } from './treasury-approve/treasury-approve.component';


const COMPONENTS = [TreasuryApprovalComponent];
const COMPONENTS_DYNAMIC = [ TreasuryApprovalComponent, DeleteTreasuryApprovalComponent, TreasuryApproveComponent ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, TreasuryApprovalComponent, DeleteTreasuryApprovalComponent, TreasuryApproveComponent,],
  imports: [
    SharedModule,
    TreasuryApprovalRoutingModule,
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
  providers: [TreasuryApprovalService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    TreasuryApprovalComponent,
    TreasuryApproveComponent,
    DeleteTreasuryApprovalComponent
  ],
})
export class TreasuryApprovalModule { }
