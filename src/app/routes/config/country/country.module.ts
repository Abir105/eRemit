import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '@shared/shared.module';
import { CountryListComponent } from './country-list/country-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddCountryComponent } from './add-country/add-country.component';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { CountryRoutingModule } from './country-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ThemeModule } from '../../../theme/theme.module';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { CountryService } from '@core/services/country.service';

const COMPONENTS = [CountryListComponent];
const COMPONENTS_DYNAMIC = [AddCountryComponent, DeleteCountryComponent, UpdateCountryComponent];

@NgModule({
  imports: [SharedModule, CountryRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule, MatSortModule,
    ToastrModule.forRoot({
        closeButton: true,
      }
    )],
  providers: [CountryService],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, CountryListComponent, NotificationCompoComponent, AddCountryComponent, NotificationCompoComponent, DeleteCountryComponent, UpdateCountryComponent],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule, MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule, AddCountryComponent,
    CountryListComponent, DeleteCountryComponent, UpdateCountryComponent]
})
export class CountryModule { }
