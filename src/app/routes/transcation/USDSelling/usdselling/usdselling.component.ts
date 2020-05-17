import { Component, OnInit, ViewChild } from '@angular/core';
import { USDSellingService} from '@core/services/usdselling.service';
import { FormGroup, FormBuilder, Validators, NgForm, AbstractControl } from '@angular/forms';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { USDSellingInfo } from '../../../notificationComp/model/USDSellingInfo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-usdselling',
  templateUrl: './usdselling.component.html',
  styleUrls: ['./usdselling.component.scss']
})
export class USDSellingComponent implements OnInit {

  public displayedColumns = [
  'Sl_No',
  'Exchange_House',
  'BDT_Account',
  'Treasury_Rate',
  'Offer_Rate',
  'USD_CREDIT',
  'Selling_Amount',
  'Approve'];
  public dataSource = new MatTableDataSource<USDSellingInfo>();
  reactiveForm : FormGroup;
  usdselling: Subscription;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  usdSellingData: any;
  model: any;
  AddId: 'addId';
  private USD_CREDIT: number;
  private Exchange_House: number;
  private BDT_Account: number;
  disabled: any;

  get formArray(): AbstractControl | null {
    return this.reactiveForm.get('formArray');
  }
  // Selling_Amount = '';
  //#box (keyup)="onKey(box.value,Selling_Amount,$event)"
  // onKey(value: string, selling_Amount: any) {
  //   this.Selling_Amount = value;
  //  // let Current_Balance = (selling_Amount.target.value - this.Current_Balance)
  //   }


  constructor(public dialog: MatDialog,
              private router: Router,
              private usdsellingService: USDSellingService,
              private _formBuilder: FormBuilder,
              private fb: FormBuilder,
              ) { }

  ngOnInit() {

    this.reactiveForm = this.fb.group({

          Exchange_House: ['', [Validators.required]],
          Account_Number: ['', [Validators.required]],
          Treasury_Rate: ['', [Validators.required]],
          Offer_Rate: ['', [Validators.required]],
          Current_Balance: ['', [Validators.required,]],
          Selling_Amount: ['', [Validators.required]],
          Message: ['', [Validators.required]],

    });
    this.getAllUsdSellingData();
  }

  get Treasury_Rate() { return this.reactiveForm.get('Treasury_Rate'); }
  get Offer_Rate() { return this.reactiveForm.get('Offer_Rate'); }
  get Selling_Amount() { return this.reactiveForm.get('Selling_Amount'); }

  private getAllUsdSellingData() {
    this.usdsellingService.getUsdsellingData('usdsellingData')
      .subscribe(res => {
        this.usdSellingData = res.data;
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  saveById(data, s, form: NgForm) {
  let newData = {
    Exchange_House: s.Exchange_House,
    Account_Number: s.BDT_Account,
    Treasury_Rate: data.Treasury_Rate,
    Offer_Rate: data.Offer_Rate,
    Current_Balance: ((s.USD_CREDIT)-(data.Selling_Amount)),
    Selling_Amount: data.Selling_Amount,
  };
  console.log(newData,'new data');
  this.usdsellingService.addUSDsellingApproval({ route: 'addUSDsellingApproval', body: newData})
    .subscribe(res => {
      this.notification.successmsg('Sent for USD Selling Approval is successfully');
            this.reactiveForm.reset();
          }, (err) => {
            this.notification.errorsmsg('Sorry! Can not Sent for USD Selling Approval');
          });
    }
}
