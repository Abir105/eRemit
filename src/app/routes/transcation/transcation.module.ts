import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { TranscationRoutingModule} from './transcation-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule} from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BeftnAmendmentComponent } from './beftn-amendment/beftn-amendment.component';
import { BeftnResendComponent } from './beftn-resend/beftn-resend.component';

const COMPONENTS = [ ];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [ SharedModule, TranscationRoutingModule, MaterialModule, MatTableModule, MatSortModule,
    ToastrModule.forRoot({
      closeButton: true, })
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [MatTableModule, MatSortModule, MatInputModule, FlexLayoutModule, MatPaginatorModule]
})
export class TranscationModule { }
