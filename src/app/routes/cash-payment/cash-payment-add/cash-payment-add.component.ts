import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { BankService } from '@core/services/bank.service';
import { DatePipe } from '@angular/common';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { CashPaymentService } from '@core/services/cash-payment.service';
import { Observable, observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
export interface User {
  TT_No: string;
}


@Component({
  selector: 'app-cash-payment-add',
  templateUrl: './cash-payment-add.component.html',
  styleUrls: ['./cash-payment-add.component.scss']
})
export class CashPaymentAddComponent implements OnInit {
  selectedReference: string;
  myControl = new FormControl();
  description = 'Add New Bank';
  reactiveForm4: FormGroup;
  bankAddId: 'addBank';
  bankAdd: any;
  private IdentificationType: any;
  options: User[];
  filteredOptions: Observable<User[]>;
  ReferenceNo: any;
  cashData: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor(private bankService: BankService, private cashPaymentService: CashPaymentService,
              private fb: FormBuilder, public datepipe: DatePipe) {}


  ngOnInit() {
    this.reactiveForm4 = this.fb.group({
      referenceNo: ['', [Validators.required]],
      exHouseName: [''],
      remitDate: [''],
      beneficiaryName: ['', [Validators.required]],
      remitterName: ['', [Validators.required]],
      pinNo: [''],
      remitAmount: ['', [Validators.required]],
      identificationNo: ['', [Validators.required]],
      identificationType: ['', [Validators.required]],
      phone: [''],
      identificationIssuer: [''],
      incentiveAmount: ['', [Validators.required]],
      totalAmount: ['', [Validators.required]],
      expiredDate: ['']
    });
    this.getReference();
    this.getIdentificationTypes();
  }
  displayFn(user: User): string {
    return user && user.TT_No ? user.TT_No : '';
  }
  private _filter(TTNo: string): User[] {
    const filterValue = TTNo.toLowerCase();
    return this.options.filter(option => option.TT_No.toLowerCase().indexOf(filterValue) === 0);
  }
    // private _filter(value: string): string[] {
    //  const filterValue = value.toLowerCase()
    //  return this.ReferenceNo.filter(a => a.toLowerCase().includes(filterValue) );
    // }
  get referenceNo() { return this.reactiveForm4.get('referenceNo'); }
  get exHouseName() { return this.reactiveForm4.get('exHouseName'); }
  get remitDate() { return this.reactiveForm4.get('remitDate'); }
  get beneficiaryName() { return this.reactiveForm4.get('beneficiaryName'); }
  get remitterName() { return this.reactiveForm4.get('remitterName'); }
  get pinNo() { return this.reactiveForm4.get('pinNo'); }
  get remitAmount() { return this.reactiveForm4.get('remitAmount'); }
  get identificationType() { return this.reactiveForm4.get('identificationType'); }
  get identificationNo() { return this.reactiveForm4.get('identificationNo'); }
  get identificationIssuer() { return this.reactiveForm4.get('identificationIssuer'); }
  get incentiveAmount() { return this.reactiveForm4.get('incentiveAmount'); }
  get totalAmount() { return this.reactiveForm4.get('totalAmount'); }
  get phone() { return this.reactiveForm4.get('phone'); }
  get expiredDate() { return this.reactiveForm4.get('expiredDate'); }


  addPayment(form: NgForm) {
    this.notification.successmsg('Payment Successful');
    this.reactiveForm4.reset();
  }
  public getIdentificationTypes = () => {
    this.cashPaymentService.getIdentification('identificationType')
      .subscribe(res  => {
        this.IdentificationType = res.data;
        console.log(this.IdentificationType);
      });
  };
  onSelect(id) {
    const select = id.TT_No;
    console.log(select)
    this.getcashData(select);
  }
  private getcashData(id: string) {
    this.cashPaymentService.getcashdata(id).subscribe(data => {
      this.cashData = data;
      const cdata = this.cashData[0];
      console.log(this.cashData);
      this.reactiveForm4.patchValue({
        beneficiaryName : cdata.Beneficiary,
        remitterName: cdata.Remitter,
        remitAmount: cdata.Amount,
        incentiveAmount: 2,
        totalAmount: cdata.Amount * 2
      });
    });
  }

  public getReference = () => {
    this.cashPaymentService.getReferenceNo('referenceNo')
      .subscribe(res  => {
        this.ReferenceNo = res;
        this.options = res;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.TT_No),
            map(name => name ? this._filter(name) : this.options.slice())
          );
      });
  };
  // public getReference = () => {
  //   this.cashPaymentService.getReferenceNo('referenceNo')
  //     .subscribe(res  => {
  //       for (const obj of res) {
  //         // tslint:disable-next-line:forin
  //         for (const key in obj) {
  //           const reference = [];
  //           reference.push(obj[key]++);
  //           console.log( reference );
  //         }
  //       }
  //       this.ReferenceNo = res;
  //       console.log(this.ReferenceNo);
  //     });
  // };

  // displayFn(subject) {
  //   return subject ? subject.TT_No : undefined;
  // }
}
