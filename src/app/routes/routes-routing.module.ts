import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { HelpersComponent } from './helpers/helpers.component';
import { AuthGuard } from './sessions/login/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'config',
        loadChildren: () => import('./config/config.module').then(m => m.ConfigModule),
        data: { title: 'Config', titleI18n: 'config' },
      },
      {
        path: 'cashPayment',
        loadChildren: () => import('./cash-payment/cash-payment.module').then(m => m.CashPaymentModule),
        data: { title: 'CashPayment', titleI18n: 'CashPayment' },
      },
      {
        path: 'fileProcessing',
        loadChildren: () => import('./file-processing/file-processing.module').then(m => m.FileProcessingModule),
        data: { title: 'File-Processing', titleI18n: 'fileProcessing' },
      },
      {
        path: 'transaction',
        loadChildren: () => import('./transcation/transcation.module').then(m => m.TranscationModule),
        data: { title: 'Transaction', titleI18n: 'transaction' },
      },
      {
        path: 'exchangeHouse',
        loadChildren: () => import('./exchange-house-setup/exchange-house-setup.module').then(m => m.ExchangeHouseSetupModule),
        data: { title: 'ExchangeHouse', titleI18n: 'exchangeHouse' },
      },
      {
        path: 'setup',
        loadChildren: () => import('./set-up/set-up.module').then(m => m.SetUpModule),
        data: { title: 'Material', titleI18n: 'material' },
      },
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
        data: { title: 'Material', titleI18n: 'material' },
      },
      {
        path: 'material',
        loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
        data: { title: 'Material', titleI18n: 'material' },
      },
      {
        path: 'ex_house_country',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
        data: { title: 'Gallery', titleI18n: 'Gallery' },
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
        data: { title: 'Gallery', titleI18n: 'Gallery' },
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
        data: { title: 'Forms', titleI18n: 'Forms' },
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
        data: { title: 'Tables', titleI18n: 'Tables' },
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        data: { title: 'Profile', titleI18n: 'Profile' },
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'Sessions' },
      },
      {
        path: 'helpers',
        component: HelpersComponent,
        data: { title: 'Helpers', titleI18n: 'Helpers' },
      },
    ],
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent, data: { title: 'Login', titleI18n: 'Login' } }
    ],
  },
  { path: '**', redirectTo: 'login' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
