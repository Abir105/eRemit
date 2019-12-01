import { Component, Inject, OnInit} from '@angular/core';;
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankService } from '@core/services/bank.service';


@Component({
  selector: 'app-bank-delete',
  templateUrl: './bank-delete.component.html',
  styleUrls: ['./bank-delete.component.scss']
})
export class BankDeleteComponent implements OnInit {
  id: string;
  constructor(private bankService: BankService, private dialogRef: MatDialogRef<BankDeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }
  deleteBank() {
    this.bankService.delete(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }

}
