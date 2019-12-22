import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentTypeService } from '@core/services/payment-type.service';

@Component({
  selector: 'app-payment-type-delete',
  templateUrl: './payment-type-delete.component.html',
  styleUrls: ['./payment-type-delete.component.scss']
})
export class PaymentTypeDeleteComponent implements OnInit {

  id: string;

  constructor(private paymentTypeService: PaymentTypeService, private dialogRef: MatDialogRef<PaymentTypeDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }

  deletePaymentType() {
    this.paymentTypeService.delete(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }

}
