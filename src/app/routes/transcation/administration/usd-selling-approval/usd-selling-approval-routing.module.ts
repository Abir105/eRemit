import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsdSellingApprovalComponent } from './usdSellingApproval/usd-selling-approval.component';
import { UsdsellingApproveComponent } from './usdselling-approve/usdselling-approve.component';
import { UsdsellingDeleteComponent } from './usdselling-delete/usdselling-delete.component';


const routes: Routes = [
  { path: '', component: UsdSellingApprovalComponent},
  { path: 'create', component: UsdSellingApprovalComponent},
  { path: 'Approve', component: UsdsellingApproveComponent},
  { path: 'delete', component: UsdsellingDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsdSellingApprovalRoutingModule { }
