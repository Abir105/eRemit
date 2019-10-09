import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ExHouseRoutingModule } from './ex-house-routing.module';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { SharedModule } from '@shared/shared.module';
import { CountryListComponent } from './country-list/country-list.component';
import {MaterialModule} from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddCountryComponent } from './add-country/add-country.component';
import { ThemeModule } from '../../theme/theme.module';
import { NotificationCompoComponent } from '../notificationComp/notificationCompo.component';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';

const COMPONENTS = [CountryComponent, CurrencyComponent];
const COMPONENTS_DYNAMIC = [AddCountryComponent, DeleteCountryComponent, UpdateCountryComponent];

@NgModule({
  imports: [SharedModule, ExHouseRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule,
    ToastrModule.forRoot({
        closeButton: true,
      }
    )],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, CountryListComponent, NotificationCompoComponent, AddCountryComponent, NotificationCompoComponent, DeleteCountryComponent, UpdateCountryComponent],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule, MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule, AddCountryComponent,
    CountryListComponent, DeleteCountryComponent,UpdateCountryComponent]
})
export class ExHouseModule { }
