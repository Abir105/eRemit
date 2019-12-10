import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchCreateComponent } from './branch-create/branch-create.component';
import { BranchUpdateComponent } from './branch-update/branch-update.component';



const routes: Routes = [
  { path: '', component: BranchListComponent},
  { path: 'create', component: BranchCreateComponent},
  { path: 'update', component: BranchUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchInfoRoutingModule { }
