import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankCreateComponent } from './bank-create/bank-create.component';


const routes: Routes = [
  { path: '', component: BankListComponent},
  { path: 'create', component: BankCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankInfoRoutingModule { }
