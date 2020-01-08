import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchCreateComponent } from './branch-create/branch-create.component';
import { BranchUpdateComponent } from './branch-update/branch-update.component';
import { BranchDeleteComponent } from './branch-delete/branch-delete.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';



const routes: Routes = [
  { path: '', component: BranchListComponent},
  { path: 'create', component: BranchCreateComponent},
  { path: 'update/:id', component: BranchUpdateComponent},
  { path: 'delete', component: BranchDeleteComponent},
  { path: 'details', component: BranchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchInfoRoutingModule { }
