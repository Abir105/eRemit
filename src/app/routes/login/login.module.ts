import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LoginscreenComponent],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatFormFieldModule,
  ],
})
export class LoginModule { }
