import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileProcessingAddComponent } from './file-processing-add/file-processing-add.component';
import { IncompletedBatchesComponent } from './incompleted-batches/incompleted-batches.component';


const routes: Routes = [
  { path: '', component: FileProcessingAddComponent },
  {path: 'incomplete', component: IncompletedBatchesComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileProcessingRoutingModule { }
