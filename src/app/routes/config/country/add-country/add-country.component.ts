import { CountryService } from '@core/services/country.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  description = 'Add New Country';
  reactiveForm1: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddCountryComponent>,
              private fb: FormBuilder, private countryService: CountryService) {
    this.reactiveForm1 = this.fb.group({
      name: ['', [Validators.required]],
      short_name: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  countryFormSubmit(data) {
    console.log(data);
    this.countryService.create('addCountry', data)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }
}
/*
  public showSuccessNotification() {
    this.notificationservice.success('This is the success message');
  }

  public showErrorNotification() {
    this.notificationservice.error('This is the error message');
  }


}*/
