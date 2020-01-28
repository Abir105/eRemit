import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeHouseService } from '@core/services/exchange-house.service';

@Component({
  selector: 'app-exchange-house-details',
  templateUrl: './exchange-house-details.component.html',
  styleUrls: ['./exchange-house-details.component.scss']
})
export class ExchangeHouseDetailsComponent implements OnInit {
  ExHouseDetailsDatabyId: any;
  ExHouseDetailsData: any;
  debitInsData: any;
  assignedOfficerData: any;
  private id: string;


  constructor(private router: Router, private route: ActivatedRoute,  private exchangeHouseService: ExchangeHouseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.getExhouseDetails(id);
    this.getDebitInstructions(id);
    this.getAssignedOfficer(id);
  }
  private getExhouseDetails(id: string) {
     this.exchangeHouseService.getExhouseById(id).subscribe(data => {
      this.ExHouseDetailsDatabyId = data;
      this.ExHouseDetailsData = this.ExHouseDetailsDatabyId[0];
    });
  }
  private getDebitInstructions(id: string) {
    this.exchangeHouseService.getDabitIns(id).subscribe(data => {
      this.debitInsData = data;
    });
  }
  private getAssignedOfficer(id: string) {
    this.exchangeHouseService.getExhouseOfficer(id).subscribe(data => {
      this.assignedOfficerData = data;
    });
  }


}
