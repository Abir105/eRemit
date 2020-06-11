import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TreasuryApprovalService } from '@core/services/treasury-approval.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-treasury-approve',
  templateUrl: './treasury-approve.component.html',
  styleUrls: ['./treasury-approve.component.scss']
})
export class TreasuryApproveComponent implements OnInit {
  reactiveForm1: FormGroup;
  element;
  Id: number;
  constructor(private fb: FormBuilder,
              private repoService: TreasuryApprovalService,
              private dialogRef: MatDialogRef<TreasuryApproveComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.element = data;
  }
  ngOnInit() {
    this.Id = this.element.Id;
  }
  approveTreasury(data) {
    const updateTreasuryData = { Id: this.element.Id };
    this.repoService.approveRow('TreasuryApprove', updateTreasuryData).subscribe((res) => {
    this.dialogRef.close(JSON.stringify(res));
   });
  }
}
