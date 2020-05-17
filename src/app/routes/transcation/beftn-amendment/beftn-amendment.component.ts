import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BankService } from '@core/services/bank.service';
import { CashPaymentService } from '@core/services/cash-payment.service';
import { DatePipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { ToastrService } from 'ngx-toastr';
export interface User {
  TT_No: string;
}

@Component({
  selector: 'app-beftn-amendment',
  templateUrl: './beftn-amendment.component.html',
  styleUrls: ['./beftn-amendment.component.scss']
})
export class BeftnAmendmentComponent implements OnInit {
  cashData: any;
  myControl = new FormControl();
  options: User[];
  filteredOptions: Observable<User[]>;
  description = 'Add New Bank';
  reactiveForm4: FormGroup;
  bankAddId: 'addBank';
  bankAdd: any;
  private IdentificationType: any;
  ReferenceNo: any;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor(private bankService: BankService, private cashPaymentService: CashPaymentService,
              private fb: FormBuilder, private toastr: ToastrService) {}


  ngOnInit() {
    this.reactiveForm4 = this.fb.group({
      ttNo: ['', [Validators.required]],
      referenceNo: [''],
      exHouseName: [''],
      invoiceDate: [''],
      beneficiaryName: [''],
      remitterName: [''],
      bankName: [''],
      branchName: [''],
      accountNo: [''],
      routingNo: [''],
      totalAmount: ['']

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
  get ttNo() { return this.reactiveForm4.get('ttNo'); }
  get referenceNo() { return this.reactiveForm4.get('referenceNo'); }
  get exHouseName() { return this.reactiveForm4.get('exHouseName'); }
  get invoiceDate() { return this.reactiveForm4.get('invoiceDate'); }
  get beneficiaryName() { return this.reactiveForm4.get('beneficiaryName'); }
  get remitterName() { return this.reactiveForm4.get('remitterName'); }
  get bankName() { return this.reactiveForm4.get('bankName'); }
  get branchName() { return this.reactiveForm4.get('branchName'); }
  get identificationType() { return this.reactiveForm4.get('identificationType'); }
  get routingNo() { return this.reactiveForm4.get('routingNo'); }
  get totalAmount() { return this.reactiveForm4.get('totalAmount'); }
  get accountNo() { return this.reactiveForm4.get('accountNo'); }

  addPayment(form: NgForm) {
    this.toastr.success('Payment Successful');
    this.reactiveForm4.reset();
  }
  public getIdentificationTypes = () => {
    this.cashPaymentService.getIdentification('identificationType')
      .subscribe(res  => {
        this.IdentificationType = res.data;
      });
  };

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
        bankName: cdata.Bank,
        branchName: cdata.Branch,
        incentiveAmount: 2,
        accountNo : cdata.AC_No,
        totalAmount: cdata.Amount
      });
    });
  }

}
