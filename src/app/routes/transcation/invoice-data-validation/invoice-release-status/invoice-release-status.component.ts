import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InvoiceDataValidationService } from '@core/services/invoice-data-validation.service';

@Component({
  selector: 'app-invoice-release-status',
  templateUrl: './invoice-release-status.component.html',
  styleUrls: ['./invoice-release-status.component.scss']
})
export class InvoiceReleaseStatusComponent implements OnInit {
  reactiveForm1: FormGroup;
  element;
  Id: number;
  constructor(private fb: FormBuilder,
              private repoService: InvoiceDataValidationService,
              private dialogRef: MatDialogRef<InvoiceReleaseStatusComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.element = data;
  }
  ngOnInit() {
    this.Id = this.element.Id;
  }
  releaseStatus(data) {
    const releaseData = { Id: this.element.Id };
    this.repoService.releaseRow('Release', releaseData).subscribe((res) => {
      this.dialogRef.close(JSON.stringify(res));
    });
  }
}
