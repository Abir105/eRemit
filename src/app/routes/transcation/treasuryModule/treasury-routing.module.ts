import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreasuryComponent } from './treasury/treasury.component';
import { TreasuryUpdateComponent} from './treasury-update/treasury-update.component';
import { TreasuryDeleteComponent } from './treasury-delete/treasury-delete.component';


const routes: Routes = [
  { path: '', component: TreasuryComponent},
  { path: 'list', component: TreasuryComponent},
  { path: 'update', component: TreasuryUpdateComponent},
  { path: 'delete', component: TreasuryDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TreasuryRoutingModule { }
