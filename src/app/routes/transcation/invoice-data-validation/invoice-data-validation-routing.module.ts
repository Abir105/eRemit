import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDataValidationComponent } from './invoice-data-validation/invoice-data-validation.component';
import { InvoiceDataValidationDetailsComponent } from './invoice-data-validation-details/invoice-data-validation-details.component';
import { InvoiceReleaseStatusComponent } from './invoice-release-status/invoice-release-status.component';


const routes: Routes = [
  { path: '', component: InvoiceDataValidationComponent},
  { path: 'create', component: InvoiceDataValidationComponent},
  { path: 'details', component: InvoiceDataValidationDetailsComponent},
  { path: 'release', component: InvoiceReleaseStatusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceDataValidationRoutingModule { }
