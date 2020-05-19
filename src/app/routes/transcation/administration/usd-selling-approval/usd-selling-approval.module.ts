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
import { UsdSellingApprovalComponent } from './usdSellingApproval/usd-selling-approval.component';
import { UsdSellingApprovalRoutingModule } from './usd-selling-approval-routing.module';
import { UsdSellingApprovalService } from '@core/services/usd-selling-approval.service';
import { UsdsellingApproveComponent } from './usdselling-approve/usdselling-approve.component';
import { UsdsellingDeleteComponent } from './usdselling-delete/usdselling-delete.component';




const COMPONENTS = [UsdSellingApprovalComponent];
const COMPONENTS_DYNAMIC = [ UsdSellingApprovalComponent, UsdsellingApproveComponent, UsdsellingDeleteComponent, ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, UsdSellingApprovalComponent,UsdsellingApproveComponent,UsdsellingDeleteComponent],
  imports: [
    SharedModule,
    UsdSellingApprovalRoutingModule,
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
  providers: [UsdSellingApprovalService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    UsdSellingApprovalComponent,
    UsdsellingDeleteComponent,
    UsdsellingApproveComponent
  ],
})
export class UsdSellingApprovalModule { }
