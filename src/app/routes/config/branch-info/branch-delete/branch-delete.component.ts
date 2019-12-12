import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankService } from '@core/services/bank.service';


@Component({
  selector: 'app-branch-delete',
  templateUrl: './branch-delete.component.html',
  styleUrls: ['./branch-delete.component.scss']
})
export class BranchDeleteComponent implements OnInit {
  id: string;
  constructor(private bankService: BankService, private dialogRef: MatDialogRef<BranchDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }
  deleteBank() {
    this.bankService.deleteBranch(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }
}
