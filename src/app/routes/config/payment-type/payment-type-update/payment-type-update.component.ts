import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentTypeService } from '@core/services/payment-type.service';

@Component({
  selector: 'app-payment-type-update',
  templateUrl: './payment-type-update.component.html',
  styleUrls: ['./payment-type-update.component.scss']
})
export class PaymentTypeUpdateComponent implements OnInit {

  description = 'Update a Payment Type';
  paymentTypeUpdateForm: FormGroup;
  element;
  id: number;
  paymentTypeName: string;
  constructor(public dialogRef: MatDialogRef<PaymentTypeUpdateComponent>, private fb: FormBuilder, private paymentTypeService: PaymentTypeService, @Inject(MAT_DIALOG_DATA) data) {

    this.paymentTypeUpdateForm = this.fb.group({
      paymentTypeName: ['', [Validators.required]]
    });
    this.element = data;
  }

  ngOnInit() {

    this.paymentTypeName = this.element.paymentTypeName;
    this.id = this.element.id;
  }

  officerUpdate(data) {
    const updateOfficerData = {id: this.element.id, paymentTypeName: data.paymentTypeName };
    this.paymentTypeService.update('updatePaymentType', updateOfficerData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }



}
