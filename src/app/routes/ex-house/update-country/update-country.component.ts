import { Component, Inject, OnInit } from '@angular/core';
import { RepositoryService } from '@core/services/repository.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.scss']
})
export class UpdateCountryComponent implements OnInit {

  description = 'Update a Country';
  reactiveForm2: FormGroup;
   element;
  id: number;
  shortName: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<UpdateCountryComponent>, private fb: FormBuilder, private repoService: RepositoryService, @Inject(MAT_DIALOG_DATA) data) {
    this.reactiveForm2 = this.fb.group({
      name: ['', [Validators.required]],
      short_name: ['', [Validators.required]]
    });
    this.element = data;


   // this.shortName = data.short_name;
  //   this.name = data.name;
    //this.id = data.id;
  }

  ngOnInit() {
       this.shortName = this.element.short_name;
       this.name = this.element.name;
       this.id = this.element.id;

   //  console.log(this.data);
    // console.log(this.data.short_name,'dddddddddddddddddddd');
    // this.reactiveForm2.patchValue({short_name:  this.data.short_name});
  }

  countryFormUpdate(data) {
    const updateCountryData = {id: this.element.id, name: data.name, short_name: data.short_name};
    this.repoService.update('updateCountry', updateCountryData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
