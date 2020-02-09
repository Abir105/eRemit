import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IncentiveService } from '@core/services/incentive.service';

@Component({
  selector: 'app-add-incentive',
  templateUrl: './add-incentive.component.html',
  styleUrls: ['./add-incentive.component.scss']
})
export class AddIncentiveComponent implements OnInit {
  description = 'Add New Incentive';
  reactiveForm1: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddIncentiveComponent>,
              private fb: FormBuilder, private incentiveService: IncentiveService) {
    this.reactiveForm1 = this.fb.group({
      incentivePercentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      maximumAmount: ['', [Validators.required, Validators.min(1)]],
      rate: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
  }
  incentiveFormSubmit(data) {
    console.log(data);
    this.incentiveService.create({ route: 'addIncentive', body: data })
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }
}
