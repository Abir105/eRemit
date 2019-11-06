import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '@core/services/currency.service';


@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.scss']
})
export class UpdateCurrencyComponent implements OnInit {

  description = 'Update a Currency';
  reactiveForm2: FormGroup;
  element;
  id: number;
  curShortName: string;
  curName: string;
  curSwiftCode: string;
  curReportName: string;

  constructor(public dialogRef: MatDialogRef<UpdateCurrencyComponent>, private fb: FormBuilder, private repoService: CurrencyService, @Inject(MAT_DIALOG_DATA) data) {

    this.reactiveForm2 = this.fb.group({
      cur_name: ['', [Validators.required]],
      cur_short_name: ['', [Validators.required]],
      cur_swift_code: ['', [Validators.required]],
      cur_report_name: ['', [Validators.required]]
    });
    this.element = data;
  }

  ngOnInit() {

    this.curShortName = this.element.cur_short_name;
    this.curName = this.element.cur_name;
    this.curSwiftCode = this.element.cur_swift_code;
    this.curReportName = this.element.cur_report_name;
    this.id = this.element.id;
  }

  currencyFormUpdate(data) {
    const updateCurrencyData = {id: this.element.id, cur_name: data.cur_name, cur_short_name: data.cur_short_name, cur_report_name: data.cur_report_name, cur_swift_code: data.cur_swift_code };
    this.repoService.update('updateCurrency', updateCurrencyData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
