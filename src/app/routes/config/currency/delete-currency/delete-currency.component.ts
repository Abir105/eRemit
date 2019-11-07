import { Component, Inject, OnInit } from '@angular/core';
import { CurrencyService } from '@core/services/currency.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-currency',
  templateUrl: './delete-currency.component.html',
  styleUrls: ['./delete-currency.component.scss']
})
export class DeleteCurrencyComponent implements OnInit {

  shortName: string;

  constructor(private repoService: CurrencyService, private dialogRef: MatDialogRef<DeleteCurrencyComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.shortName = data.short_name;
  }

  ngOnInit() {
  }

  deleteCurrency() {
  }
}
