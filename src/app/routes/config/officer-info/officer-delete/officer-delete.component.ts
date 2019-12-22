import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OfficerService } from '@core/services/officer.service';

@Component({
  selector: 'app-officer-delete',
  templateUrl: './officer-delete.component.html',
  styleUrls: ['./officer-delete.component.scss']
})
export class OfficerDeleteComponent implements OnInit {

  id: string;

  constructor(private officerService: OfficerService, private dialogRef: MatDialogRef<OfficerDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }

  deleteOffice() {
    this.officerService.delete(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }

}
