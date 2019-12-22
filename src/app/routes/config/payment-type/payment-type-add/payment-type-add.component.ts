import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OfficerService } from '@core/services/officer.service';
import { PaymentTypeService } from '@core/services/payment-type.service';

@Component({
  selector: 'app-payment-type-add',
  templateUrl: './payment-type-add.component.html',
  styleUrls: ['./payment-type-add.component.scss']
})
export class PaymentTypeAddComponent implements OnInit {
  PaymentTypeAddForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PaymentTypeAddComponent>, private fb: FormBuilder, private paymentTypeService: PaymentTypeService) {
    this.PaymentTypeAddForm = this.fb.group({
      paymentTypeName: ['', [Validators.required]]
    });


  }
  ngOnInit() {
  }
  paymentTypeAdd(data) {
    this.paymentTypeService.addPaymentType({ route: 'addPaymentType', body: data })
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
