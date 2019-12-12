import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BankService } from '@core/services/bank.service';
import { CurrencyService } from '@core/services/currency.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
  styleUrls: ['./branch-update.component.scss']
})
export class BranchUpdateComponent implements OnInit {
  private divisionData: any;
  private currencyData: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  branchUpdateForm: FormGroup;
  private bankData: any;
  private branch: Subscription;
  private branchDetailsDatabyId: any;
  private id: string;
  bankcode: number;
  branchcode: number;
  fullName: string;
  shortName: string;
  routingNo: string;
  reportName: string;
  bbCode: string;
  swiftCode: string;
  bbReg: string;
  country: string;
  baseCurrency: number;
  city: string;
  openDate: string;
  division: number;
  // tslint:disable-next-line:variable-name
  create_by: string;
  constructor(private fb: FormBuilder, private bankService: BankService, private router: Router, private route: ActivatedRoute, private currencyService: CurrencyService) { }

  ngOnInit() {
     this.getAllBanks();
     this.getAllCurrency();
     this.getAllDivision();
     this.id = this.route.snapshot.paramMap.get('id');
     const id = this.id;
     this.getBranchDetails(id);
     this.branchUpdateForm = this.fb.group({
           id: [ id, [Validators.required]],
           fullName: ['', [Validators.required]],
           shortName: ['', [Validators.required]],
           reportName: ['', [Validators.required]],
           bbCode: ['', [Validators.required]],
           branchcode: ['', [Validators.required]],
           bbReg: ['', [Validators.required]],
           bankcode: ['', [Validators.required]],
           openDate: ['', [Validators.required]],
           swiftCode: ['', [Validators.required]],
           country: ['Bangladesh', [Validators.required]],
           city: [ '', [Validators.required]],
           baseCurrency: [ '', [Validators.required]],
           division: ['', [Validators.required]],
           routingNo: ['', [Validators.required]],
           create_by: ['', [Validators.required]],
     });

  }
  updateBranch(form: NgForm) {
    this.bankService.branchUpdate(form).subscribe(data => {
          this.notification.successmsg('Bank  updated successfully');
          this.branchUpdateForm.reset();
        }, (err) => {
          this.notification.errorsmsg('Sorry! Bank not updated');
        }
      );
  }
  public getAllBanks = () => {
    this.bankService.getData('bank')
      .subscribe(res  => {
        this.bankData = res.data;
      });
  };
  public getAllCurrency = () => {
    this.currencyService.getData('currency')
      .subscribe(res  => {
        this.currencyData = res.data;
      });
  };
  public getAllDivision = () => {
    this.bankService.getDevision('division')
      .subscribe(res  => {
        this.divisionData = res.data;
      });

  };
  private getBranchDetails(id: string) {
    this.branch = this.bankService.getBranchById(id).subscribe(data => {
      this.branchDetailsDatabyId = data;
      this.bankcode = this.branchDetailsDatabyId[0].bankcode;
      this.branchcode = this.branchDetailsDatabyId[0].branchcode;
      this.fullName = this.branchDetailsDatabyId[0].fullName;
      this.shortName = this.branchDetailsDatabyId[0].shortName;
      this.routingNo = this.branchDetailsDatabyId[0].routingNo;
      this.reportName = this.branchDetailsDatabyId[0].reportName;
      this.bbCode = this.branchDetailsDatabyId[0].bbCode;
      this.swiftCode = this.branchDetailsDatabyId[0].swiftCode;
      this.bbReg = this.branchDetailsDatabyId[0].bbReg;
      this.country = this.branchDetailsDatabyId[0].country;
      this.baseCurrency = +this.branchDetailsDatabyId[0].baseCurrency;
      this.city = this.branchDetailsDatabyId[0].city;
      this.openDate = this.branchDetailsDatabyId[0].openDate;
      this.division = +this.branchDetailsDatabyId[0].division;
      this.create_by = this.branchDetailsDatabyId[0].create_by;
    });
  }
  }
