import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficerService } from '@core/services/officer.service';

@Component({
  selector: 'app-officer-update',
  templateUrl: './officer-update.component.html',
  styleUrls: ['./officer-update.component.scss']
})
export class OfficerUpdateComponent implements OnInit {
  statusValue = [
    {value: '0', viewValue: 'False'},
    {value: '1', viewValue: 'True'},
  ];
  description = 'Update a Offficer';
  officerUpdateForm: FormGroup;
  element;
  id: number;
  employeeCode: string;
  status: number;
  employeeName: string;
  emailAddress: string;

  constructor(public dialogRef: MatDialogRef<OfficerUpdateComponent>, private fb: FormBuilder, private officerService: OfficerService, @Inject(MAT_DIALOG_DATA) data) {

    this.officerUpdateForm = this.fb.group({
      employeeCode: ['', [Validators.required]],
      status: ['', [Validators.required]],
      employeeName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]]
    });
    this.element = data;
  }

  ngOnInit() {

    this.employeeCode = this.element.employeeCode;
    this.status = this.element.status;
    this.employeeName = this.element.employeeName;
    this.emailAddress = this.element.emailAddress;
    this.id = this.element.id;
  }

  officerUpdate(data) {
    const updateOfficerData = {id: this.element.id, employeeCode: data.employeeCode, status: data.status, employeeName: data.employeeName, emailAddress: data.emailAddress };
    this.officerService.update('updateOfficer', updateOfficerData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }


}
