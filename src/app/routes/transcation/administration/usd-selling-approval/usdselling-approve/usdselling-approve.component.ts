import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsdSellingApprovalService } from '@core/services/usd-selling-approval.service';

@Component({
  selector: 'app-usdselling-approve',
  templateUrl: './usdselling-approve.component.html',
  styleUrls: ['./usdselling-approve.component.scss']
})
export class UsdsellingApproveComponent implements OnInit {

  reactiveForm1: FormGroup;
  element;
  id: number;
  //Selling_Amount: number;

  constructor(private repoService: UsdSellingApprovalService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<UsdsellingApproveComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.element = data;
  }
  ngOnInit() {
    this.id = this.element.id;
  }
  approveTreasuryUSDselling() {
    const usdSellingData = {
      id: this.element.id,
      //Selling_Amount: data.Selling_Amount
      };
    this.repoService.approveRow('approveRow', usdSellingData).subscribe((res) => {
      this.dialogRef.close(JSON.stringify(res));
    });
  }
}
