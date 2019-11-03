import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '@core/services/country.service';

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.scss']
})
export class UpdateCurrencyComponent implements OnInit {

  description = 'Update a Currency';
  reactiveForm2: FormGroup;
  element;
  id: number;
  shortName: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<UpdateCurrencyComponent>, private fb: FormBuilder, private repoService: CountryService, @Inject(MAT_DIALOG_DATA) data) {

    this.reactiveForm2 = this.fb.group({
      name: ['', [Validators.required]],
      short_name: ['', [Validators.required]]
    });
    this.element = data;
  }

  ngOnInit() {

    this.shortName = this.element.short_name;
    this.name = this.element.name;
    this.id = this.element.id;
  }

  currencyFormUpdate(data) {
    const updateCountryData = {id: this.element.id, name: data.name, short_name: data.short_name};
    this.repoService.update('updateCountry', updateCountryData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
