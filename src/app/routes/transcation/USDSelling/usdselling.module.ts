import { NgModule } from '@angular/core';
import { USDSellingComponent } from './usdselling/usdselling.component';
import { SharedModule } from '@shared/shared.module';
import { UsdsellingRoutingModule } from '../USDSelling/usdselling-routing.module';
import { MaterialModule } from '../../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ThemeModule } from '../../../theme/theme.module';
import { ToastrModule } from 'ngx-toastr';
import { CountryModule } from '../../config/country/country.module';
import { USDSellingService } from '../../../core/services/usdselling.service';

const COMPONENTS = [USDSellingComponent];
const COMPONENTS_DYNAMIC = [ USDSellingComponent ];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, USDSellingComponent, ],
  imports: [
    SharedModule,
    UsdsellingRoutingModule,
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
  providers: [USDSellingService],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    USDSellingComponent
  ],
})
export class USDSellingModule { }
