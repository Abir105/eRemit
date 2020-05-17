import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { BankService } from '@core/services/bank.service';
import { CashPaymentService } from '@core/services/cash-payment.service';
import { DatePipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';

export interface User {
  TT_No: string;
}

@Component({
  selector: 'app-beftn-resend',
  templateUrl: './beftn-resend.component.html',
  styleUrls: ['./beftn-resend.component.scss']
})
export class BeftnResendComponent implements OnInit {


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
              private fb: FormBuilder, public datepipe: DatePipe) {}


  ngOnInit() {
    this.reactiveForm4 = this.fb.group({
      ttNo: ['', [Validators.required]],
      invoiceDate: ['', [Validators.required]],
      invoiceDateTo: ['', [Validators.required]],
    });
    this.getReference();
  }
  displayFn(user: User): string {
    return user && user.TT_No ? user.TT_No : '';
  }
  private _filter(TTNo: string): User[] {
    const filterValue = TTNo.toLowerCase();
    return this.options.filter(option => option.TT_No.toLowerCase().indexOf(filterValue) === 0);
  }
  get ttNo() { return this.reactiveForm4.get('ttNo'); }
  get invoiceDate() { return this.reactiveForm4.get('invoiceDate'); }
  get invoiceDateTo() { return this.reactiveForm4.get('invoiceDateTo'); }



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


}
