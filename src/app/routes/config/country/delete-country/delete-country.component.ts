import { Component, Inject, OnInit} from '@angular/core';
import { CountryService } from '@core/services/country.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html',
  styleUrls: ['./delete-country.component.scss']
})
export class DeleteCountryComponent implements OnInit {

  short_name: string;

  constructor(private repoService: CountryService, private dialogRef: MatDialogRef<DeleteCountryComponent>, @Inject(MAT_DIALOG_DATA) data) {
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
