import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AccountTypeService } from '@core/services/account-type.service';

@Component({
  selector: 'app-account-type-update',
  templateUrl: './account-type-update.component.html',
  styleUrls: ['./account-type-update.component.scss']
})
export class AccountTypeUpdateComponent implements OnInit {
  actype: string;
  actdesc: string;
  description = 'Update Account Type';
  reactiveForm6: FormGroup;
  element;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;

  constructor(public dialogRef: MatDialogRef<AccountTypeUpdateComponent>, private fb: FormBuilder, private repoService: AccountTypeService, @Inject(MAT_DIALOG_DATA) data) {
    this.reactiveForm6 = this.fb.group({
      ac_type: ['', [Validators.required]],
      act_desc: ['', [Validators.required]]
    });
    this.element = data;
  }

  ngOnInit() {
    this.actdesc = this.element.act_desc;
    this.actype = this.element.ac_type;
  }
  accounttype(data) {
    const accountnatureData = {id: this.element.act_id, ac_type: data.ac_type, act_desc: data.act_desc};
    this.repoService.updateaccounttype('updateAccountType', accountnatureData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
