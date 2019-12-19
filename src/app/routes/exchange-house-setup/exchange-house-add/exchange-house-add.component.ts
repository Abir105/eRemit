import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ExchangeHouseService } from '@core/services/exchange-house.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { CurrencyService } from '@core/services/currency.service';
import { BankService } from '@core/services/bank.service';

@Component({
  selector: 'app-exchange-house-add',
  templateUrl: './exchange-house-add.component.html',
  styleUrls: ['./exchange-house-add.component.scss']
})
export class ExchangeHouseAddComponent implements OnInit {
  cashPayment = [
    {value: '1', viewValue: 'Foreign Remittance'},
    {value: '2', viewValue: 'web Site'},
  ];
  acDFrom = [
    {value: '1', viewValue: 'nrt Ac from'},
    {value: '2', viewValue: 'GL account'},
  ];
  acDbIns = [
    {value: '1', viewValue: 'Bulk'},
    {value: '2', viewValue: 'Single'},
  ];
  Status = [
    {value: '1', viewValue: 'Active'},
    {value: '2', viewValue: 'Inactive'},
  ];
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  exHouse: {};
  private currencyData: any;
  private countryData: any;
  get formArray(): AbstractControl | null { return this.reactiveForm1.get('formArray'); }
  constructor(private fb: FormBuilder, private bankService: BankService, private currencyService: CurrencyService, private exchangeHouseService: ExchangeHouseService) {}
  ngOnInit() {
    this.reactiveForm1 = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          ex_house_name: ['', Validators.required],
          ex_house_prefix: ['', Validators.required],
          ex_house_address: ['', Validators.required],
          country_code: ['', Validators.required],
          currency_code: ['', Validators.required],
          postal_code: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          web_address: ['', Validators.required]
        }),
        this.fb.group({
          time_zone_id: ['', Validators.required],
          cash_payment_from: ['', Validators.required],
          account_debit_ins: ['', Validators.required],
          account_debit_from: ['', Validators.required],
          create_by: ['', Validators.required],
          update_by: ['', Validators.required],
          status: ['', Validators.required],
          web_cash: ['', Validators.required],
          create_date: ['', Validators.required]
        }),
      ])
    });
    this.getAllCountry();
    this.getAllCurrency();
  }
  public getAllCountry = () => {
    this.bankService.getCountry('country')
      .subscribe(res  => {
        this.countryData = res.data;
      });
  };
  public getAllCurrency = () => {
    this.currencyService.getData('currency')
      .subscribe(res  => {
        this.currencyData = res.data;
      });
  };
  // tslint:disable-next-line:variable-name
  exchangeHouseAdd(ex_house_name, ex_house_prefix, ex_house_address, country_code, currency_code, postal_code, city, state, web_address, time_zone_id, cash_payment_from, account_debit_ins, account_debit_from, create_by, update_by, status, web_cash, create_date ) {
    this.exHouse = {
      ex_house_name,
      ex_house_prefix,
      ex_house_address,
      country_code,
      currency_code,
      postal_code,
      city,
      state,
      web_address,
      time_zone_id,
      cash_payment_from,
      account_debit_ins,
      account_debit_from,
      create_by,
      update_by,
      status,
      web_cash,
      create_date
    };
    this.exchangeHouseService.addExchangeHouse(this.exHouse)
      .subscribe(data => {
          this.notification.successmsg('Bank  added successfully');
        }, (err) => {
          this.notification.errorsmsg('Sorry! Bank not added');
        }
      );
  }



}
