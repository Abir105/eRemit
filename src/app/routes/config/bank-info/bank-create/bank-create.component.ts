import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BankService } from '@core/services/bank.service';
import { DatePipe } from '@angular/common';
import { CurrencyService } from '@core/services/currency.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';


@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.scss']
})
export class BankCreateComponent implements OnInit {
  selectedDivision = 0;
  selectedDistrict = 0;
  description = 'Add New Bank';
  reactiveForm4: FormGroup;
  bankAddId: 'addBank';
  bankAdd: any;
  private divisionData: any;
  private districtData: any;
  private upzillaData: any;
  private countryData: any;
  private currencyData: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor(private bankService: BankService, private currencyService: CurrencyService,
              private fb: FormBuilder, public datepipe: DatePipe) {}


  ngOnInit() {
    this.reactiveForm4 = this.fb.group({
      fullName: ['', [Validators.required]],
      shortName: ['', [Validators.required]],
      reportName: ['', [Validators.required]],
      bbCode: ['', [Validators.required]],
      swiftCode: ['', [Validators.required]],
      bbReg: ['', [Validators.required]],
      country: ['Bangladesh', [Validators.required]],
      openDate: ['', [Validators.required]],
      city: ['', [Validators.required]],
      division: ['', [Validators.required]],
      postalcode: ['', [Validators.required, Validators.max(4)]],
      phone: ['', [Validators.required, Validators.max(11), Validators.min(11)]],
      currency: ['', [Validators.required]],
      depCompId: ['', [Validators.required]],
      cntrBankAgent: ['', [Validators.required]],
      foreignInstitute: ['', [Validators.required]],
      depositoryPart: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      web: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fax: ['', [Validators.required]],
      upzilla: ['', [Validators.required]],
      district: ['', [Validators.required]]
    });
    // this.reactiveForm4.controls['country'].disable();
    // this.reactiveForm4.controls.country.disable();
    this.getAllDivision();
    this.getAllCountry();
    this.getAllCurrency();
  }

  get fullName() { return this.reactiveForm4.get('fullName'); }
  get shortName() { return this.reactiveForm4.get('shortName'); }
  get reportName() { return this.reactiveForm4.get('reportName'); }
  get bbCode() { return this.reactiveForm4.get('bbCode'); }
  get swiftCode() { return this.reactiveForm4.get('swiftCode'); }
  get bbReg() { return this.reactiveForm4.get('bbReg'); }
  get country() { return this.reactiveForm4.get('country'); }
  get currency() { return this.reactiveForm4.get('currency'); }
  get openDate() { return this.reactiveForm4.get('openDate'); }
  get city() { return this.reactiveForm4.get('city'); }
  get division() { return this.reactiveForm4.get('division'); }
  get postalcode() { return this.reactiveForm4.get('postalcode'); }
  get depCompId() { return this.reactiveForm4.get('depCompId'); }
  get cntrBankAgent() { return this.reactiveForm4.get('cntrBankAgent'); }
  get foreignInstitute() { return this.reactiveForm4.get('foreignInstitute'); }
  get depositoryPart() { return this.reactiveForm4.get('depositoryPart'); }
  get contactPerson() { return this.reactiveForm4.get('contactPerson'); }
  get web() { return this.reactiveForm4.get('web'); }
  get email() { return this.reactiveForm4.get('email'); }
  get fax() { return this.reactiveForm4.get('fax'); }
  get upzilla() { return this.reactiveForm4.get('upzilla'); }
  get district() { return this.reactiveForm4.get('district'); }
  get phone() { return this.reactiveForm4.get('phone'); }


  addBank(form: NgForm) {
    this.bankAdd = this.bankService.addBank(form)
      .subscribe(data => {
        this.notification.successmsg('Bank  added successfully');
        this.reactiveForm4.reset();
        }, (err) => {
        this.notification.errorsmsg('Sorry! Bank not added');
        }
      );
  }
  public getAllDivision = () => {
    this.bankService.getDevision('division')
      .subscribe(res  => {
        this.divisionData = res.data;
      });

  };
  onSelect(id) {
    this.selectedDivision = id;
    this.getAllDistrict(id);
  }
  onSelectDistrict(id) {
    this.selectedDistrict = id;
    this.getAllUpzilla(id);
  }
  public getAllDistrict = (id) => {
    this.bankService.getDistrict('district', id)
      .subscribe(res  => {
        this.districtData = res.data;
      });
  };
  public getAllUpzilla = (id) => {
    this.bankService.getUpzilla('upzilla', id)
      .subscribe(res  => {
        this.upzillaData = res.data;
      });
  };
  public getAllCountry = () => {
    this.bankService.getCountry('country')
      .subscribe(res  => {
        this.countryData = res;
      });
  };
  public getAllCurrency = () => {
    this.currencyService.getData('currency')
      .subscribe(res  => {
        this.currencyData = res.data;
      });
  };

}
