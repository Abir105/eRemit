import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsdSellingApprovalService } from '@core/services/usd-selling-approval.service';

@Component({
  selector: 'app-usdselling-delete',
  templateUrl: './usdselling-delete.component.html',
  styleUrls: ['./usdselling-delete.component.scss']
})
export class UsdsellingDeleteComponent implements OnInit {
  id: number;
  constructor(private repoService: UsdSellingApprovalService, private dialogRef: MatDialogRef<UsdsellingDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }
  deleteUSDselling() {
    this.repoService.delete(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }
}
