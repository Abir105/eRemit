import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AccountNatureService } from '@core/services/account-nature.service';

@Component({
  selector: 'app-account-nature-delete',
  templateUrl: './account-nature-delete.component.html',
  styleUrls: ['./account-nature-delete.component.scss']
})
export class AccountNatureDeleteComponent implements OnInit {
  curid: string;
  constructor(private accountNatureService: AccountNatureService, private dialogRef: MatDialogRef<AccountNatureDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.curid = data.id;
  }


ngOnInit() {
  }
  deleteCurrency() {
    this.accountNatureService.delete(this.curid).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }

}
