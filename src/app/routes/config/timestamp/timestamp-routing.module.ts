import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimestampComponentComponent } from './timestamp-component/timestamp-component.component';


const routes: Routes = [
  { path: '', component: TimestampComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimestampRoutingModule { }
