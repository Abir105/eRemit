import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';



const routes: Routes = [
  { path: '', component: LoginscreenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
