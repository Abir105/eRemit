import { Component, Inject, OnInit } from '@angular/core';
import { IncentiveService } from '@core/services/incentive.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-incentive',
  templateUrl: './update-incentive.component.html',
  styleUrls: ['./update-incentive.component.scss']
})
export class UpdateIncentiveComponent implements OnInit {

  description = 'Update a Incentive Policy';
  reactiveForm2: FormGroup;
  element;
  id: number;
  incentivePercentage: number;
  maximumAmount: number;
  rate: number;
  balance: number;

  constructor(public dialogRef: MatDialogRef<UpdateIncentiveComponent>, private fb: FormBuilder, private repoService: IncentiveService, @Inject(MAT_DIALOG_DATA) data) {
    this.reactiveForm2 = this.fb.group({
      incentivePercentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      maximumAmount: ['', [Validators.required, Validators.min(1)]],
      rate: ['', [Validators.required, Validators.min(1)]],
    });
    this.element = data;
  }

  ngOnInit() {
    this.incentivePercentage = this.element.incentivePercentage;
    this.maximumAmount = this.element.maximumAmount;
    this.rate = this.element.rate;
    this.balance = this.element.balance;
  }

  incentiveFormUpdate(data) {
    const updateIncentiveData = {id: this.element.id, incentivePercentage: data.incentivePercentage, maximumAmount: data.maximumAmount, rate: data.rate, balance: data.balance };
    this.repoService.update('updateIncentive', updateIncentiveData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }
}
