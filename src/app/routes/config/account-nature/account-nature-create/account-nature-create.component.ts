import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CurrencyService } from '@core/services/currency.service';
import { DatePipe } from '@angular/common';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { MatDialogRef } from '@angular/material';
import { AccountNatureService } from '@core/services/account-nature.service';

@Component({
  selector: 'app-account-nature-create',
  templateUrl: './account-nature-create.component.html',
  styleUrls: ['./account-nature-create.component.scss']
})
export class AccountNatureCreateComponent implements OnInit {
  reactiveForm5: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor( public dialogRef: MatDialogRef<AccountNatureCreateComponent>, private currencyService: AccountNatureService, private accounttype: CurrencyService, private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit() {
    this.reactiveForm5 = this.fb.group({
      account_nature: ['', [Validators.required]],
      full_name: ['', [Validators.required]]
    });
  }
  addCurrency(data) {
    console.log(data);
    this.currencyService.account_nature_create({ route: 'addCountry', body: data })
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
