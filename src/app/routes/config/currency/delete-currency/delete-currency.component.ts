import { Component, Inject, OnInit } from '@angular/core';
import { CurrencyService } from '@core/services/currency.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-currency',
  templateUrl: './delete-currency.component.html',
  styleUrls: ['./delete-currency.component.scss']
})
export class DeleteCurrencyComponent implements OnInit {

<<<<<<< HEAD
  curShortName: string;

  constructor(private repoService: CurrencyService, private dialogRef: MatDialogRef<DeleteCurrencyComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.curShortName = data.cur_short_name;
=======
  shortName: string;

  constructor(private repoService: CurrencyService, private dialogRef: MatDialogRef<DeleteCurrencyComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.shortName = data.short_name;
>>>>>>> fdf2430... bank info is done
  }

  ngOnInit() {
  }

  deleteCurrency() {
<<<<<<< HEAD
    this.repoService.delete(this.curShortName).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );

=======
>>>>>>> fdf2430... bank info is done
  }
}
