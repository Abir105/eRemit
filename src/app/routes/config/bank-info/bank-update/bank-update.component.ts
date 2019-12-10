import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BankService } from '@core/services/bank.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { CurrencyService } from '@core/services/currency.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';


@Component({
  selector: 'app-bank-update',
  templateUrl: './bank-update.component.html',
  styleUrls: ['./bank-update.component.scss']
})
export class BankUpdateComponent implements OnInit {
  bankFullName: string;
  bankShortName: string;
  bankReportName: string;
  bankbbCode: string;
  bankSwiftCode: string;
  bankbbReg: string;
  bankOpenDate: string;
  bankPhone: string;
  bankCurrency: string;
  bankFax: string;
  bankEmail: string;
  bankWeb: string;
  bankContactPerson: string;
  bankdepositoryPart: string;
  bankForeignInstitute: string;
  bankCntrBankAgent: string;
  bankDepCompId: string;
  selectedDivision: number;
  bankCity: string;
  selectedDistrict: number;
  bankUpzilla: number;
  bankPostalcode: number;
  description = 'Add New Bank';
  reactiveForm4: FormGroup;
  bankAddId: 'addBank';
  bankAdd: any;
  private divisionData: any;
  private districtData: any;
  private upzillaData: any;
  private countryData: any;
  private currencyData: any;
  bank: Subscription;
  bankDetailsDatabyId: any;
  bankDetailsData: any;
  private id: string;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor(private router: Router, private route: ActivatedRoute,
              private currencyService: CurrencyService,
              private fb: FormBuilder, public datepipe: DatePipe,
              private bankService: BankService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.getBankDetails(id);
    this.reactiveForm4 = this.fb.group({
      id: [ id, [Validators.required]],
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
      postalcode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
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
  private getBankDetails(id: string) {
    this.bank = this.bankService.getBankId(id).subscribe(data => {
      this.bankDetailsDatabyId = data;
      this.bankDetailsData = this.bankDetailsDatabyId[0];
      this.bankFullName = this.bankDetailsData.fullName;
      this.bankShortName = this.bankDetailsData.shortName;
      this.bankReportName = this.bankDetailsData.reportName;
      this.bankbbCode = this.bankDetailsData.bbCode;
      this.bankSwiftCode = this.bankDetailsData.swiftCode;
      this.bankbbReg = this.bankDetailsData.bbReg;
      this.bankOpenDate = this.bankDetailsData.openDate;
      this.bankPhone = this.bankDetailsData.phone;
      this.bankCurrency = this.bankDetailsData.currency;
      this.bankFax = this.bankDetailsData.fax;
      this.bankEmail = this.bankDetailsData.email;
      this.bankWeb = this.bankDetailsData.web;
      this.bankContactPerson = this.bankDetailsData.contactPerson;
      this.bankdepositoryPart = this.bankDetailsData.depositoryPart;
      this.bankForeignInstitute = this.bankDetailsData.foreignInstitute;
      this.bankCntrBankAgent = this.bankDetailsData.cntrBankAgent;
      this.bankDepCompId = this.bankDetailsData.depCompId;
      this.selectedDivision = +this.bankDetailsData.division;
      this.bankCity = this.bankDetailsData.city;
      this.selectedDistrict = +this.bankDetailsData.district;
      this.bankUpzilla = +this.bankDetailsData.upzilla;
      this.bankPostalcode = this.bankDetailsData.postalcode;
    });

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

  updateBank(form: NgForm) {
    this.bankAdd = this.bankService.bankUpdate(form)
      .subscribe(data => {
        this.notification.successmsg('Bank  updated successfully');
        this.reactiveForm4.reset();
        }, (err) => {
        this.notification.errorsmsg('Sorry! Bank not updated');
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
