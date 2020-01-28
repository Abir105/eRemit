import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { MatDialogRef } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AccountTypeService } from '@core/services/account-type.service';

@Component({
  selector: 'app-account-type-create',
  templateUrl: './account-type-create.component.html',
  styleUrls: ['./account-type-create.component.scss']
})
export class AccountTypeCreateComponent implements OnInit {
  reactiveForm6: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  constructor( public dialogRef: MatDialogRef<AccountTypeCreateComponent>, private AcService: AccountTypeService, private accounttype: AccountTypeService, private fb: FormBuilder, public datepipe: DatePipe) { }

  ngOnInit() {
    this.reactiveForm6 = this.fb.group({
      ac_type: ['', [Validators.required]],
      act_desc: ['', [Validators.required]]
    });
  }
  addAccountType(data) {
    console.log(data);
    this.AcService.accounttypecreate({ route: 'addType', body: data })
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
