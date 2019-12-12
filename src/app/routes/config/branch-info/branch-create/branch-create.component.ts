import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { BankService } from '@core/services/bank.service';
import { CurrencyService } from '@core/services/currency.service';
import { Subscription } from 'rxjs';

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
  addBranchData: any;
  constructor(private fb: FormBuilder, private bankService: BankService, private currencyService: CurrencyService) { }

  ngOnInit() {
    this.branchAddForm = this.fb.group({
      bankcode: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      shortName: ['', [Validators.required]],
      reportName: ['', [Validators.required]],
      branchcode: ['', [Validators.required]],
      routingNo: ['', [Validators.required]],
      bbCode: ['', [Validators.required]],
      bbReg: ['', [Validators.required]],
      openDate: ['', [Validators.required]],
      swiftCode: ['', [Validators.required]],
      country: ['Bangladesh', [Validators.required]],
      // country: [{value: 'Bangladesh', disabled: true}, [Validators.required]],
      city: ['', [Validators.required]],
      division: ['', [Validators.required]],
      baseCurrency: ['', [Validators.required]],
      create_by: ['', [Validators.required]],
      });
    this.getAllBanks();
    this.getAllDivision();
    this.getAllCountry();
    this.getAllCurrency();
  }
  // get fullName() { return this.branchAddForm.get('fullName'); }

  addBranch(form: NgForm) {
    this.addBranchData = this.bankService.branchAdd(form)
      .subscribe(data => {
          this.notification.successmsg('Branch  added successfully');
          this.branchAddForm.reset();
        }, (err) => {
          this.notification.errorsmsg('Sorry! Branch not added');
        }
      );
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
