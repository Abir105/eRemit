import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TreasuryApprovalService } from '@core/services/treasury-approval.service';

@Component({
  selector: 'app-delete-treasury-approval',
  templateUrl: './delete-treasury-approval.component.html',
  styleUrls: ['./delete-treasury-approval.component.scss']
})
export class DeleteTreasuryApprovalComponent implements OnInit {
  Id: string;
  constructor(private repoService: TreasuryApprovalService, private dialogRef: MatDialogRef<DeleteTreasuryApprovalComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.Id = data.Id;
  }
  ngOnInit() {
  }
  deleteTreasury() {
    this.repoService.delete(this.Id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }
}
