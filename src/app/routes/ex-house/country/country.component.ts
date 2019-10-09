import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  q = {
    username: '',
    email: '',
    gender: '',
  };

  reactiveForm1: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm1 = this.fb.group({
      name: ['', [Validators.required]],
      short_name: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  countryFormSubmit(data) {
      console.log(JSON.stringify(data));
  }
}
