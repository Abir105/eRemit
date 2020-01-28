import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExchangeHouseService } from '@core/services/exchange-house.service';

@Component({
  selector: 'app-exchange-house-delete',
  templateUrl: './exchange-house-delete.component.html',
  styleUrls: ['./exchange-house-delete.component.scss']
})
export class ExchangeHouseDeleteComponent implements OnInit {
  id: string;
  constructor(private exchangeHouseService: ExchangeHouseService,
              private dialogRef: MatDialogRef<ExchangeHouseDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.id = data.id;
  }

  ngOnInit() {
  }


  deleteExchangeHouse() {
    this.exchangeHouseService.delete(this.id).subscribe((res) => {
        this.dialogRef.close(JSON.stringify(res));
      }
    );
  }

}
