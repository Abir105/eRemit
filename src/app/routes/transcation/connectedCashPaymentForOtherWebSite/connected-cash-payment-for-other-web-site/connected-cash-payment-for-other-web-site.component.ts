import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ConnectedCashPaymentForOtherWebSiteService } from '@core/services/connected-cash-payment-for-other-web-site.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InvoiceDataValidationInfo } from '../../../notificationComp/model/InvoiceDataValidationInfo';
export interface IdentificationType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-connected-cash-payment-for-other-web-site',
  templateUrl: './connected-cash-payment-for-other-web-site.component.html',
  styleUrls: ['./connected-cash-payment-for-other-web-site.component.scss']
})
export class ConnectedCashPaymentForOtherWebSiteComponent implements OnInit {
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  public displayedColumns = [
    'Date',
    'Payment',
    'TT_No',
    'Beneficiary',
    //'Branch_Name',
    // 'Routing_No',
    'Account_No',
    // 'Amount',
    // 'Payment_Type',
    // 'Remitter_Name',
    'Release_Status'
  ];
  public dataSource = new MatTableDataSource<InvoiceDataValidationInfo>();
  cashPaymentForOtherWebsite: Subscription;
  reactiveForm: FormGroup;
  identificationTypes: IdentificationType[] = [
    {value: 'NID', viewValue: 'NID'},
    {value: 'PASSPORT', viewValue: 'PASSPORT'},
    {value: 'DRIVING LICENCE', viewValue: 'DRIVING LICENCE'}
  ];
  selectedValue: any;
  isReadonly: any;
  fieldHidden: any;
  club: any;
  constructor(private _ConnectedCashPaymentForOtherWebSiteService: ConnectedCashPaymentForOtherWebSiteService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      pinNo: ['', [Validators.required]],
      exchangeHouseName: ['', [Validators.required]],
      beneficiaryMobileNo: ['', [Validators.required,]],
      dateOfBirth: ['', [Validators.required]],
      identificationType: ['', [Validators.required]],
      identificationNo: ['', [Validators.required]],
      documentIssuerDate: ['',[Validators.required]],
      expiredDate: ['', [Validators.required]],
    });
    this.getAll();
  }
  public getAll = () => {
    this._ConnectedCashPaymentForOtherWebSiteService.getData('invoice')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };
  get pinNo() { return this.reactiveForm.get('pinNo'); }
  get exchangeHouseName() { return this.reactiveForm.get('exchangeHouseName'); }
  get beneficiaryMobileNo() { return this.reactiveForm.get('beneficiaryMobileNo'); }
  get dateOfBirth() { return this.reactiveForm.get('dateOfBirth'); }
  get identificationType() { return this.reactiveForm.get('identificationType'); }
  get identificationNo() { return this.reactiveForm.get('identificationNo'); }
  get documentIssuerDate() { return this.reactiveForm.get('documentIssuerDate'); }
  get expiredDate() { return this.reactiveForm.get('expiredDate'); }

}
