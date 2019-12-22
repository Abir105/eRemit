import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { OfficerAddComponent } from './officer-add/officer-add.component';
import { OfficerDeleteComponent } from './officer-delete/officer-delete.component';
import { OfficerUpdateComponent } from './officer-update/officer-update.component';

const routes: Routes = [
  { path: '', component: OfficerListComponent},
  { path: 'list', component: OfficerListComponent},
  { path: 'add', component: OfficerAddComponent},
  { path: 'delete', component: OfficerDeleteComponent},
  { path: 'update', component: OfficerUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerInfoRoutingModule { }
