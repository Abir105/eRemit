import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountTypeListComponent } from './account-type-list/account-type-list.component';
import { AccountTypeCreateComponent } from './account-type-create/account-type-create.component';
import { AccountTypeUpdateComponent } from './account-type-update/account-type-update.component';
import { AccountTypeDeleteComponent } from './account-type-delete/account-type-delete.component';


const routes: Routes = [
  { path: '', component: AccountTypeListComponent},
  { path: 'list', component: AccountTypeListComponent},
  { path: 'create', component: AccountTypeCreateComponent},
  { path: 'delete/:id', component: AccountTypeDeleteComponent},
  { path: 'update', component: AccountTypeUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTypeRoutingModule { }
