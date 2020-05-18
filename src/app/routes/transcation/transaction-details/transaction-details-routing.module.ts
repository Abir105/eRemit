import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionDetailsListComponent } from './transaction-details-list/transaction-details-list.component';


const routes: Routes = [
  { path: '', component: TransactionDetailsComponent},
  { path: 'list', component: TransactionDetailsComponent},
  { path: 'details', component: TransactionDetailsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionDetailsRoutingModule { }
