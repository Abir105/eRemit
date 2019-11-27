import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BankService } from '@core/services/bank.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.scss']
})
export class BankCreateComponent implements OnInit {
  description = 'Add New Bank';
  reactiveForm4: FormGroup;
  bankAddId: 'addBank';
  bankAdd: any;
  private divisionData: any;
  private districtData: any;
  private upzillaData: any;

  constructor(private bankService: BankService,
              private fb: FormBuilder, public datepipe: DatePipe) {}


  ngOnInit() {
    // const ddMMyyyy = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    // console.log(ddMMyyyy);
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
      upzilla: ['', [Validators.required]],
      district: ['', [Validators.required]]
    });
    this.getAllDivision();
    this.getAllDistrict();
    this.getAllUpzilla();
  }

  get fullName() { return this.reactiveForm4.get('fullName'); }
  get shortName() { return this.reactiveForm4.get('shortName'); }
  get reportName() { return this.reactiveForm4.get('reportName'); }
  get bbCode() { return this.reactiveForm4.get('bbCode'); }
  get swiftCode() { return this.reactiveForm4.get('swiftCode'); }
  get bbReg() { return this.reactiveForm4.get('bbReg'); }
  get country() { return this.reactiveForm4.get('country'); }
  get openDate() { return this.reactiveForm4.get('openDate'); }
  get baseCurrency() { return this.reactiveForm4.get('baseCurrency'); }
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


  addBank(form: NgForm) {
    this.bankAdd = this.bankService.addBank(form)
      .subscribe(data => {
        console.log('Successfully saved');
        }, (err) => {
          console.log(err);
        }
      );
  }
  public getAllDivision = () => {
    this.bankService.getDevision('division')
      .subscribe(res  => {
        this.divisionData = res;
      });
  };
  public getAllDistrict = () => {
    this.bankService.getDistrict('district')
      .subscribe(res  => {
        this.districtData = res;
      });
  };
  public getAllUpzilla = () => {
    this.bankService.getUpzilla('upzilla')
      .subscribe(res  => {
        this.upzillaData = res;
      });
  };

}
