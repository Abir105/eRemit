import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '@core/services/bank.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  bank: Subscription;
  bankDetailsDatabyId: any;
  bankDetailsData: any;
  private id: string;
  private divisionData: any;

  constructor(private router: Router, private route: ActivatedRoute,  private bankService: BankService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.getBankDetails(id);
  }
  private getBankDetails(id: string) {
    this.bank = this.bankService.getBankId(id).subscribe(data => {
      this.bankDetailsDatabyId = data;
      this.bankDetailsData = this.bankDetailsDatabyId[0];
    });

  }
  public getAllDivision = () => {
    this.bankService.getDevision('division')
      .subscribe(res  => {
        this.divisionData = res.data;
      });

  };

}
