import { Component, Inject, OnInit } from '@angular/core';
import { FileProcessingService } from '@core/services/file-processing.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-incompleted-batches',
  templateUrl: './incompleted-batches.component.html',
  styleUrls: ['./incompleted-batches.component.scss']
})
export class IncompletedBatchesComponent implements OnInit {
  // dataSource = [];


  constructor( private fileProcessingService: FileProcessingService,
               public dialogRef: MatDialogRef<IncompletedBatchesComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // this.getAllIncompleteBatches ();
  }
  // public getAllIncompleteBatches = () => {
  //   this.fileProcessingService.getIncompleteBatch()
  //     .subscribe(res  => {
  //       this.dataSource = res.data;
  //       console.log(this.dataSource);
  //     });
  // };

}
