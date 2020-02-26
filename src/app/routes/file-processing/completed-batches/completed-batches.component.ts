import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../add-file-processing/add-file-processing.component';

@Component({
  selector: 'app-completed-batches',
  templateUrl: './completed-batches.component.html',
  styleUrls: ['./completed-batches.component.scss']
})
export class CompletedBatchesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompletedBatchesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
