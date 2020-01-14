import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AccountTypeService } from '@core/services/account-type.service';

@Component({
  selector: 'app-account-type-delete',
  templateUrl: './account-type-delete.component.html',
  styleUrls: ['./account-type-delete.component.scss']
})
export class AccountTypeDeleteComponent implements OnInit {
  actid: string;
  constructor(private accountTypeService: AccountTypeService, private dialogRef: MatDialogRef<AccountTypeDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
  this.actid = data.id;
}

  ngOnInit() {
  }
  deleteAccountType() {
  this.accountTypeService.delete(this.actid).subscribe((res) => {
      this.dialogRef.close(JSON.stringify(res));
    }
  );
}


}
