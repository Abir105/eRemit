import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '@core/services/currency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.scss']
})
export class BankCreateComponent implements OnInit {
  description = 'Add New Bank';
  reactiveForm4: FormGroup;


  // tslint:disable-next-line:variable-name
  public cur_name: any;
  public selectedCurrency: string;

  constructor(private repoService: CurrencyService, private fb: FormBuilder) {
    this.reactiveForm4 = this.fb.group({
      fullName: ['', [Validators.required]],
      shortName: ['', [Validators.required]],
      reportName: ['', [Validators.required]],
      bbCode: ['', [Validators.required]],
      swiftCode: ['', [Validators.required]],
      bbReg: ['', [Validators.required]],
      country: ['', [Validators.required]],
      openDate: ['', [Validators.required]],
      baseCurrency: ['', [Validators.required]],
      city: ['', [Validators.required]],
      division: ['', [Validators.required]],
      postalcode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      depCompId: ['', [Validators.required]],
      cntrBankAgent: ['', [Validators.required]],
      foreignInstitute: ['', [Validators.required]],
      depositoryPart: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      web: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      thana: ['', [Validators.required]],
      district: ['', [Validators.required]]
    });

    this.repoService.getData('currencies')
      .subscribe(res  => {
        this.cur_name = res.Currency;
      });

  }

  ngOnInit() {
  }


  selectCurrency(event: any) {
    this.selectedCurrency = event.target.value;
  }
}
