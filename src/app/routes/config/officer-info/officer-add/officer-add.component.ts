import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OfficerService } from '@core/services/officer.service';

@Component({
  selector: 'app-officer-add',
  templateUrl: './officer-add.component.html',
  styleUrls: ['./officer-add.component.scss']
})
export class OfficerAddComponent implements OnInit {
  statusValue = [
    {value: '0', viewValue: 'Inactive'},
    {value: '1', viewValue: 'Active'},
  ];
  officerAddForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<OfficerAddComponent>, private fb: FormBuilder, private officerService: OfficerService) {
    this.officerAddForm = this.fb.group({
      employeeCode: ['', [Validators.required]],
      status: ['', [Validators.required]],
      employeeName: ['', [Validators.required]],
      phoneNumber : ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]]
    });


  }
  ngOnInit() {
  }
  officerAdd(data) {
    console.log(data);
    this.officerService.addOfficer({ route: 'addOfficer', body: data })
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }

}
