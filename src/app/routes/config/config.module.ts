import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from '@shared/shared.module';
import {MaterialModule} from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeModule } from '../../theme/theme.module';

const COMPONENTS = [ ];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, ConfigRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    MatInputModule, FlexLayoutModule, MatPaginatorModule, ThemeModule,
    ToastrModule.forRoot({
        closeButton: true,
      }
    )],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule, MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule]
})
export class ConfigModule { }
