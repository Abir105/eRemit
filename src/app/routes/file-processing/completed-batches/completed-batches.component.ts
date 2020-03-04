import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-completed-batches',
  templateUrl: './completed-batches.component.html',
  styleUrls: ['./completed-batches.component.scss']
})
export class CompletedBatchesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompletedBatchesComponent>,
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
