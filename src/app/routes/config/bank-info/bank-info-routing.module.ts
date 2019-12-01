import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankCreateComponent } from './bank-create/bank-create.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankDeleteComponent } from './bank-delete/bank-delete.component';


const routes: Routes = [
  { path: '', component: BankListComponent},
  { path: 'create', component: BankCreateComponent},
  { path: 'details', component: BankDetailsComponent},
  { path: 'delete', component: BankDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankInfoRoutingModule { }
