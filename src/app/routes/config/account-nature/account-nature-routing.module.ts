import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountNatureListComponent } from './account-nature-list/account-nature-list.component';
import { AccountNatureUpdateComponent } from './account-nature-update/account-nature-update.component';
import { AccountNatureDeleteComponent } from './account-nature-delete/account-nature-delete.component';
import { AccountNatureCreateComponent } from './account-nature-create/account-nature-create.component';

const routes: Routes = [
  { path: '', component: AccountNatureListComponent},
  { path: 'list', component: AccountNatureListComponent},
  { path: 'create', component: AccountNatureCreateComponent},
  { path: 'delete/:id', component: AccountNatureDeleteComponent},
  { path: 'update', component: AccountNatureUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountNatureRoutingModule { }
