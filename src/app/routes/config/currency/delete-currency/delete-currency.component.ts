import { Component, Inject, OnInit } from '@angular/core';
import { CountryService } from '@core/services/country.service';
import { CurrencyService } from '@core/services/currency.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-currency',
  templateUrl: './delete-currency.component.html',
  styleUrls: ['./delete-currency.component.scss']
})
export class DeleteCurrencyComponent implements OnInit {

  curShortName: string;

  constructor(private repoService: CurrencyService, private dialogRef: MatDialogRef<DeleteCurrencyComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.curShortName = data.cur_short_name;
  }

  ngOnInit() {
  }

  deleteCurrency() {
    this.repoService.delete(this.curShortName).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );

  }
}
