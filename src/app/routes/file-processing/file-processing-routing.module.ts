import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFileProcessingComponent } from './add-file-processing/add-file-processing.component';
import { CompletedBatchesComponent } from './completed-batches/completed-batches.component';


const routes: Routes = [
  { path: '', component: AddFileProcessingComponent },
  {path: 'add', component: AddFileProcessingComponent},
  {path: 'completed', component: CompletedBatchesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileProcessingRoutingModule { }
