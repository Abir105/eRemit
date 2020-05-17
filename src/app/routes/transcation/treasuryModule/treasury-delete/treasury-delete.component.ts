import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TreasuryService } from '@core/services/treasury.service';

@Component({
  selector: 'app-treasury-delete',
  templateUrl: './treasury-delete.component.html',
  styleUrls: ['./treasury-delete.component.scss']
})
export class TreasuryDeleteComponent implements OnInit {
Id: number;
  constructor(private repoService: TreasuryService, private dialogRef: MatDialogRef<TreasuryDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.Id = data.Id;
  }

  ngOnInit() {
  }
  deleteTreasury() {
    this.repoService.delete(this.Id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }
}
