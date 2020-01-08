import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ExchangeHouseService } from '@core/services/exchange-house.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { CurrencyService } from '@core/services/currency.service';
import { BankService } from '@core/services/bank.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OfficerService } from '@core/services/officer.service';

@Component({
  selector: 'app-exchange-house-add',
  templateUrl: './exchange-house-add.component.html',
  styleUrls: ['./exchange-house-add.component.scss']
})
export class ExchangeHouseAddComponent implements OnInit {
  showData = [];
  showDataOb: {
    transaction_type: string;
    debit_account_type: string;
    debit_instruction: string;
  };

  officerData = [];
  officerIdData = [];
  public Editor = ClassicEditor;
  acType = [
    {value: '1', viewValue: 'GL'},
    {value: '2', viewValue: 'C30'},
    {value: '3', viewValue: 'C31'},
  ];
  acNature = [
    {value: '1', viewValue: 'USD'},
    {value: '2', viewValue: 'BDT'},
    {value: '3', viewValue: 'GBP'},
    {value: '4', viewValue: 'GL'},
  ];
  creditFrom = [
    {value: '1', viewValue: 'cash'},
    {value: '2', viewValue: 'Account Credit'},
    {value: '3', viewValue: 'BEFTN'},
  ];
  creditAccount = [
    {value: '1', viewValue: 'NRT Account'},
    {value: '2', viewValue: 'GL Account'},
  ];
  debitIns = [
    {value: '1', viewValue: 'Single'},
    {value: '2', viewValue: 'Bulk'},
  ];
  acDbIns = [
    {value: '1', viewValue: 'Bulk'},
    {value: '2', viewValue: 'Single'},
  ];

  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  exHouse: {};
  private currencyData: any;
  private countryData: any;
  private officerListData: any;
  private isShow: boolean;
  get formArray(): AbstractControl | null { return this.reactiveForm1.get('formArray'); }
  constructor(private fb: FormBuilder, private officerService: OfficerService, private bankService: BankService, private currencyService: CurrencyService, private exchangeHouseService: ExchangeHouseService) {}
  ngOnInit() {
    this.reactiveForm1 = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          ex_house_name: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')]],
          ex_house_prefix: ['', Validators.required],
          country_code: ['', Validators.required],
          currency_code: ['', Validators.required]
        }),
        this.fb.group({
            ex_house_address: ['', Validators.required],
            postal_code: ['', Validators.required],
            city: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            state: ['', [ Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            web_address: ['', [ Validators.required, Validators.pattern('www.+')]]
        }),
        this.fb.group({
          account_nature: ['', Validators.required],
          account_type: ['', Validators.required],
          account_number: ['', Validators.required]
        }),
        this.fb.group({
          transaction_type: [''],
          debit_account_type: [''],
          debit_instruction: ['']
        }),
        this.fb.group({
          officer: ['']
        }),
      ])
    });
    this.getAllCountry();
    this.getAllCurrency();
    this.getAllOfficers();
  }
  public getAllOfficers = () => {
    this.officerService.officerList('officers')
      .subscribe(res  => {
        this.officerListData = res;
      });
  };
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
  getdebitfromDAta( transaction_type, debit_account_type, debit_instruction) {
    // @ts-ignore
    this.showDataOb = {
      transaction_type,
      debit_account_type,
      debit_instruction
    }
    if (!this.showData.find(i => i.transaction_type === this.showDataOb.transaction_type )) {
      this.showData = [this.showDataOb, ...this.showData];
      this.isShow = false;
    }
  }
  getofficerdata( officer) {

    if (!this.officerData.find(i => i.officer === officer)) {
      this.officerData = [officer, ...this.officerData];
      this.officerIdData = [officer.id, ...this.officerIdData];
    }
  }
  // tslint:disable-next-line:variable-name
  exchangeHouseAdd(ex_house_name, ex_house_prefix, ex_house_address, country_code, currency_code, city, postal_code,  state, web_address, account_nature, account_type, account_number) {
    const debitFrom = this.showData;
    const officerId =  this.officerIdData;
    this.exHouse = {
      ex_house_name,
      ex_house_prefix,
      ex_house_address,
      country_code,
      currency_code,
      city,
      postal_code,
      state,
      web_address,
      account_nature,
      account_type,
      account_number,
      debitFrom,
      officerId
    };
    this.exchangeHouseService.addExchangeHouse(this.exHouse)
      .subscribe(data => {
          this.notification.successmsg('Exchange House  added successfully');
        }, (err) => {
          this.notification.errorsmsg('Sorry! Exchange House not added');
        }
      );
  }
}
