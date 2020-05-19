import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreasuryApprovalComponent } from './treasuryApproval/treasury-approval.component';
import { DeleteTreasuryApprovalComponent } from './delete-treasury-approval/delete-treasury-approval.component';
import { TreasuryApproveComponent } from './treasury-approve/treasury-approve.component';


const routes: Routes = [
  { path: '', component: TreasuryApprovalComponent},
  { path: 'list', component: TreasuryApprovalComponent},
  { path: 'approve', component: TreasuryApproveComponent},
  { path: 'delete', component: DeleteTreasuryApprovalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreasuryApprovalRoutingModule { }
