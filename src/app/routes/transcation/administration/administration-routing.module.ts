import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'treasuryApproval', loadChildren: () => import('./treasury-approval/treasury-approval.module').then(m => m.TreasuryApprovalModule) },
  { path: 'usdSellingApproval', loadChildren: () => import('./usd-selling-approval/usd-selling-approval.module').then(m => m.UsdSellingApprovalModule) },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
