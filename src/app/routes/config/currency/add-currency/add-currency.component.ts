import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CurrencyService } from '@core/services/currency.service';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent implements OnInit {
  description = 'Add New Currency';
  reactiveForm2: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddCurrencyComponent>, private fb: FormBuilder, private repoService: CurrencyService) {
    this.reactiveForm2 = this.fb.group({
      cur_name: ['', [Validators.required]],
      cur_short_name: ['', [Validators.required]],
      cur_swift_code: ['', [Validators.required]],
      cur_report_name: ['', [Validators.required]]
    });


  }
  ngOnInit() {
  }

  currencyFormSubmit(data) {
    console.log(data);
    this.repoService.create({ route: 'addCurrency', body: data })
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
