import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { BankService } from '@core/services/bank.service';
import { CurrencyService } from '@core/services/currency.service';

@Component({
  selector: 'app-branch-create',
  templateUrl: './branch-create.component.html',
  styleUrls: ['./branch-create.component.scss']
})
export class BranchCreateComponent implements OnInit {
  selectedDivision = 0;
  selectedDistrict = 0;
  private divisionData: any;
  private districtData: any;
  private upzillaData: any;
  private countryData: any;
  private currencyData: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  branchAddForm: FormGroup;
  private bankData: any;
  constructor(private fb: FormBuilder, private bankService: BankService, private currencyService: CurrencyService) { }

  ngOnInit() {
    this.branchAddForm = this.fb.group({
      fullName: ['', [Validators.required]],
      shortName: ['', [Validators.required]],
      reportName: ['', [Validators.required]],
      bbCode: ['', [Validators.required]],
      bbReg: ['', [Validators.required]],
      branchType: ['', [Validators.required]],
      openDate: ['', [Validators.required]],
      swiftCode: ['', [Validators.required]],
      country: ['Bangladesh', [Validators.required]],
      city: ['', [Validators.required]],
      division: ['', [Validators.required]],
      postalcode: ['', [Validators.required]],
      upzilla: ['', [Validators.required]],
      district: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      web: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fax: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      });
    this.getAllBanks();
    this.getAllDivision();
    this.getAllCountry();
    this.getAllCurrency();
  }
  public getAllBanks = () => {
    this.bankService.getData('bank')
      .subscribe(res  => {
        this.bankData = res.data;
      });
  };
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
