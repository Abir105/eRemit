import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NotificationCompoComponent } from '../../../notificationComp/notificationCompo.component';
import { AccountNatureService } from '@core/services/account-nature.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-account-nature-update',
  templateUrl: './account-nature-update.component.html',
  styleUrls: ['./account-nature-update.component.scss']
})
export class AccountNatureUpdateComponent implements OnInit {
  accountnature: string;
  fullname: string;
  curid: number;
  description = 'Update Currency';
  reactiveForm5: FormGroup;
   element;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;

  constructor(public dialogRef: MatDialogRef<AccountNatureUpdateComponent>, private fb: FormBuilder, private repoService: AccountNatureService, @Inject(MAT_DIALOG_DATA) data) {
    this.reactiveForm5 = this.fb.group({
      account_nature: ['', [Validators.required]],
      full_name: ['', [Validators.required]]
    });
    this.element = data;
  }

  ngOnInit() {
    this.accountnature = this.element.account_nature;
    this.fullname = this.element.full_name;
    this.curid = this.element.cur_id;
  }

  accountnatureupdate(data) {
    const accountnatureData = {id: this.element.cur_id, account_nature: data.account_nature, full_name: data.full_name};
    this.repoService.updateaccountnature('updateCurrency', accountnatureData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}

