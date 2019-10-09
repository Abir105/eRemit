import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { RepositoryService } from '@core/services/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { CountryInfo } from '../../model/countryInfo';
import { CountryListComponent } from '../country-list/country-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html',
  styleUrls: ['./delete-country.component.scss']
})
export class DeleteCountryComponent implements OnInit {

  short_name: string;

  constructor(private repoService: RepositoryService, private dialogRef: MatDialogRef<DeleteCountryComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.short_name = data.short_name;
  }


  ngOnInit() {
  }

  deleteCountry() {
    this.repoService.delete(this.short_name).subscribe((res) => {
      this.dialogRef.close(JSON.stringify(res));
      }
    );
  }

}
