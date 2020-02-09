import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CashPaymentForOtherWebsiteService } from '@core/services/cash-payment-for-other-website.service';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { Subscription } from 'rxjs';

export interface IdentificationType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cash-payment-for-other-website-create',
  templateUrl: './cash-payment-for-other-website-create.component.html',
  styleUrls: ['./cash-payment-for-other-website-create.component.scss']
})
export class CashPaymentForOtherWebsiteCreateComponent implements OnInit {
  cashPaymentForOtherWebsite: Subscription;
  description = 'Add Cash Payment For Other Website';
  reactiveForm4: FormGroup;
  cashPaymentForOtherWebsiteAddId: 'addCashPaymentForOtherWebsite';
  cashPaymentForOtherWebsiteAdd: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  isReadonly = true;
  private incentivePercentage: number;
  disabled: any;
  fieldHidden: any = '';
  selectedValue: string;

  identificationTypes: IdentificationType[] = [
    {value: 'NID', viewValue: 'NID'},
    {value: 'PASSPORT', viewValue: 'PASSPORT'},
    {value: 'DRIVING LICENCE', viewValue: 'DRIVING LICENCE'}
  ];

  constructor(private cashPaymentForOtherWebsiteService: CashPaymentForOtherWebsiteService,
              private fb: FormBuilder) {

  }

  ngOnInit() {
    this.reactiveForm4 = this.fb.group({
      exchangeHouseName: ['', [Validators.required]],
      referenceNo: ['', [Validators.required]],
      receiverName: ['', [Validators.required]],
      remitterName: ['', [Validators.required]],
      beneficiaryMobileNo: ['', [Validators.required,]],
      identificationType: ['', [Validators.required]],
      identificationNo: ['', [Validators.required]],
      identificationIssuer: ['', [Validators.required]],
      expiredDate: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      incentivePercentage: ['', [Validators.required]],
      incentiveAmount: ['', [Validators.required]],
      totalAmount: ['', [Validators.required]]
    });
    this.getAllIncentivePercentage();
  }

  get exchangeHouseName() { return this.reactiveForm4.get('exchangeHouseName'); }
  get referenceNo() { return this.reactiveForm4.get('referenceNo'); }
  get receiverName() { return this.reactiveForm4.get('receiverName'); }
  get remitterName() { return this.reactiveForm4.get('remitterName'); }
  get beneficiaryMobileNo() { return this.reactiveForm4.get('beneficiaryMobileNo'); }
  get identificationType() { return this.reactiveForm4.get('identificationType'); }
  get identificationNo() { return this.reactiveForm4.get('identificationNo'); }
  get identificationIssuer() { return this.reactiveForm4.get('identificationIssuer'); }
  get expiredDate() { return this.reactiveForm4.get('expiredDate'); }
  get amount() { return this.reactiveForm4.get('amount'); }

  addCashPaymentForOtherWebsite(form: NgForm) {

    // @ts-ignore
    this.cashPaymentForOtherWebsiteAdd = this.cashPaymentForOtherWebsiteService.addCashPaymentForOtherWebsite(form)
      .subscribe(data => {
          this.notification.successmsg('Cash Payment For Other Website added successfully');
          this.reactiveForm4.reset();
        }, (err) => {
          this.notification.errorsmsg('Sorry! Cash Payment For Other Website can not be added');
        }
      );
  }

  public getAllIncentivePercentage = () => {
    this.cashPaymentForOtherWebsiteService.getIncentivePercentage('incentivePercentage')
      .subscribe(res => {
        var obj = JSON.parse(JSON.stringify(res));
        this.incentivePercentage =  obj.data[0].incentivePercentage;
        //console.log(this.incentivePercentage);
      });
  };

  cal(amount) {
  let incentiveAmount = (amount.target.value * (this.incentivePercentage))/100;
  let totalAmount = (this.amount.value + incentiveAmount);
  this.reactiveForm4.patchValue({
    incentivePercentage: this.incentivePercentage + "%",
    incentiveAmount: incentiveAmount,
    totalAmount: totalAmount
  });
    this.fieldHidden = amount.target.value;
}
  cashPaymentForOtherWebsiteFormSubmit(data) {
    if(this.reactiveForm4.valid){
      console.log(data);
       this.cashPaymentForOtherWebsiteService.addCashPaymentForOtherWebsite({ route: 'addCashPaymentForOtherWebsite', body: data })
         .subscribe(res => {
          //this.dialogRef.close(JSON.stringify(res));
         });
    }
  }
}
