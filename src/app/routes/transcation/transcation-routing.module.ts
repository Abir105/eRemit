import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cashPaymentForOtherWebsite', loadChildren: () => import('./cashPaymentForOtherWebsite/cash-payment-for-other-website.module').then(m => m.CashPaymentForOtherWebsiteModule) },
  { path: 'treasury', loadChildren: () => import('./treasuryModule/treasury.module').then(m => m.TreasuryModule) },
  { path: 'usdselling', loadChildren: () => import('./USDSelling/usdselling.module').then(m => m.USDSellingModule) },
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
  { path: 'transactionDetails', loadChildren: () => import('./transaction-details/transaction-details.module').then(m => m.TransactionDetailsModule) },
  { path: 'invoiceDataValidation', loadChildren: () => import('./invoice-data-validation/invoice-data-validation.module').then(m => m.InvoiceDataValidationModule) },
  { path: 'connectedCashPaymentForOtherWebSite', loadChildren: () => import('./connectedCashPaymentForOtherWebSite/connected-cash-payment-for-other-web-site.module').then(m => m.ConnectedCashPaymentForOtherWebSiteModule) },
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranscationRoutingModule { }
