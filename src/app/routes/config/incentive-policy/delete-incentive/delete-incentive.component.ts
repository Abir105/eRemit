import { Component, Inject, OnInit } from '@angular/core';
import { IncentiveService } from '@core/services/incentive.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-incentive',
  templateUrl: './delete-incentive.component.html',
  styleUrls: ['./delete-incentive.component.scss']
})
export class DeleteIncentiveComponent implements OnInit {
  id: number;

  constructor(private repoService: IncentiveService, private dialogRef: MatDialogRef<DeleteIncentiveComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }

  deleteIncentive() {
    this.repoService.delete(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }
}
