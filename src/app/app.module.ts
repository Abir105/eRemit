import { DialogFruitComponent } from './routes/material/dialog/dialog.component';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';



import { DefaultInterceptor } from '@core';
import { StartupService } from '@core';
import { TokenInterceptorService } from '@core/services/token-interceptor.service';


export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

import { FormlyModule } from '@ngx-formly/core';
import { ToastrModule } from 'ngx-toastr';

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { AuthService } from '@core/services/auth.service';
import { AuthGuard } from './routes/sessions/login/auth.guard';


@NgModule({
  declarations: [AppComponent, DialogFruitComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ThemeModule,
    RoutesModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    AutocompleteLibModule,
    FormlyModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [ DatePipe,AuthService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogFruitComponent]
})
export class AppModule {}
