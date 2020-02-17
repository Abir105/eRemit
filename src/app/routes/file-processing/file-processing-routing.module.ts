import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFileProcessingComponent } from './add-file-processing/add-file-processing.component';


const routes: Routes = [
  { path: '', component: AddFileProcessingComponent },
  {path: 'add', component: AddFileProcessingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileProcessingRoutingModule { }
