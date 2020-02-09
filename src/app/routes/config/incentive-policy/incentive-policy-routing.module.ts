import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncentiveListComponent } from './incentive-list/incentive-list.component';
import { DeleteIncentiveComponent } from './delete-incentive/delete-incentive.component';

const routes: Routes = [
  { path: '', component: IncentiveListComponent},
  { path: 'list', component: IncentiveListComponent},
  { path: 'delete', component: DeleteIncentiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IncentivePolicyRoutingModule { }
