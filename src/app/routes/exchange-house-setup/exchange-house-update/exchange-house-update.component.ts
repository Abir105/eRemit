import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ExchangeHouseService } from '@core/services/exchange-house.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { CurrencyService } from '@core/services/currency.service';
import { BankService } from '@core/services/bank.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OfficerService } from '@core/services/officer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exchange-house-update',
  templateUrl: './exchange-house-update.component.html',
  styleUrls: ['./exchange-house-update.component.scss']
})
export class ExchangeHouseUpdateComponent implements OnInit {
  ExHouseDetailsDatabyId: any;
  ExHouseDetailsData: any;
  private id: string;
  showData = [];
  updatedDebitFromData = [];
  showDataOb: {
    transaction_type: string;
    debit_account_type: string;
    debit_instruction: string;
  };
  officerDataOb: {
    id: number;
  };

  officerData = [];
  officerIdData = [];
  updatedOfficerIdData = [];
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
  constructor(private router: Router, private route: ActivatedRoute,  private exchangeHouseService: ExchangeHouseService, private fb: FormBuilder, private officerService: OfficerService, private bankService: BankService, private currencyService: CurrencyService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.getExhouseDetails(id);
    this.getDebitInstructions(id);
    this.getAssignedOfficer(id);
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
  private getExhouseDetails(id: string) {
    this.exchangeHouseService.getExhouseById(id).subscribe(data => {
      this.ExHouseDetailsDatabyId = data;
      this.ExHouseDetailsData = this.ExHouseDetailsDatabyId[0];

    });
  }
  private getDebitInstructions(id: string) {
    this.exchangeHouseService.getDabitIns(id).subscribe(data => {
      this.showData = data;
    });
  }
  private getAssignedOfficer(id: string) {
    this.exchangeHouseService.getExhouseOfficer(id).subscribe(data => {
      this.officerData = data;
    });
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
    // console.log(transaction_type);
    // @ts-ignore
    if (transaction_type !== undefined && debit_account_type !== undefined && debit_instruction !== undefined  ) {
      this.showDataOb = {
        transaction_type,
        debit_account_type,
        debit_instruction
      };
      if (!this.showData.find(i => i.transaction_type === this.showDataOb.transaction_type)) {
        this.showData = [this.showDataOb, ...this.showData];
       // console.log(this.showData);
        this.updatedDebitFromData = [this.showDataOb, ...this.updatedDebitFromData];
        console.log(this.updatedDebitFromData.length);
      }
    }
  }
  getofficerdata( officer) {
    const id = officer.id;
    this.officerDataOb = {
      id,
    }

    if (!this.officerData.find(i => i.id === this.officerDataOb.id))

    {
      this.officerData = [officer, ...this.officerData];
      this.officerIdData = [officer.id, ...this.officerIdData];
      this.updatedOfficerIdData = [officer.id, ...this.updatedOfficerIdData];
    }
  }
  deleteExDebitIns(id , tp) {

    if (!id) {
      for (let i = 0; i < this.showData.length; ++i) {
        if (this.showData[i].transaction_type === tp) {
          this.showData.splice(i, 1);
          this.updatedDebitFromData.splice(i, 1);
        }
      }
    } else {
      this.exchangeHouseService.deleteDebitIns(id)
        .subscribe( data => {
          for (let i = 0; i < this.showData.length; ++i) {
            if (this.showData[i].id === id) {
              this.showData.splice(i, 1);
            }
          }
        });
    }
  }
  deleteOfficer(id) {
      this.exchangeHouseService.deleteExOfficer(id)
        .subscribe( data => {
          for (let i = 0; i < this.officerData.length; ++i) {
            if (this.officerData[i].id === id) {
              this.officerData.splice(i, 1);
              this.officerIdData.splice(i, 1);
              this.updatedOfficerIdData.splice(i, 1);
            }
          }
        });
  }


  // tslint:disable-next-line:variable-name
  exchangeHouseUpdate(form) {
    const debitFrom = this.updatedDebitFromData;
    const officerId =  this.updatedOfficerIdData;
    const ex_house_name = form.formArray[0].ex_house_name;
    const ex_house_prefix = form.formArray[0].ex_house_prefix;
    const country_code = form.formArray[0].country_code;
    const currency_code = form.formArray[0].currency_code;
    const ex_house_address = form.formArray[1].ex_house_address;
    const postal_code = form.formArray[1].postal_code;
    const city = form.formArray[1].city;
    const state = form.formArray[1].state;
    const web_address = form.formArray[1].web_address;
    const account_nature = form.formArray[2].account_nature;
    const account_type = form.formArray[2].account_type;
    const account_number = form.formArray[2].account_number;
    // tslint:disable-next-line:variable-name
    const ex_house_code = this.route.snapshot.paramMap.get('id');
    this.exHouse = {
      ex_house_code,
      ex_house_name,
      ex_house_prefix,
      country_code,
      currency_code,
      ex_house_address,
      postal_code,
      city,
      state,
      web_address,
      account_nature,
      account_type,
      account_number,
      debitFrom,
      officerId
    };
    this.exchangeHouseService.updateExchangeHouse(this.exHouse).subscribe(data => {
        this.notification.successmsg('Exchange House  Updated successfully');
        // this.router.navigate(['../exchangeHouse/info']);
      }, (err) => {
        this.notification.errorsmsg('Sorry! Exchange House not Updated');
      }
    );
  }



}
