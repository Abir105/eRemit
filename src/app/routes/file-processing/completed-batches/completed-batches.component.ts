import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD
=======
import { FileProcessingService } from '@core/services/file-processing.service';
>>>>>>> shafeisnine

@Component({
  selector: 'app-completed-batches',
  templateUrl: './completed-batches.component.html',
  styleUrls: ['./completed-batches.component.scss']
})
export class CompletedBatchesComponent implements OnInit {
 // dataSource = [];

<<<<<<< HEAD
  constructor(
    public dialogRef: MatDialogRef<CompletedBatchesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
=======
  constructor(private fileProcessingService: FileProcessingService,
              public dialogRef: MatDialogRef<CompletedBatchesComponent>) {}
>>>>>>> shafeisnine

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
