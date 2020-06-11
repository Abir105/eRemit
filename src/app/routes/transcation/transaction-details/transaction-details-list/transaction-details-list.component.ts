import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionDetailsService } from '@core/services/transaction-details.service';

@Component({
  selector: 'app-transaction-details-list',
  templateUrl: './transaction-details-list.component.html',
  styleUrls: ['./transaction-details-list.component.scss']
})
export class TransactionDetailsListComponent implements OnInit {
  DetailsData: any;
  debitInsData: any;
  assignedOfficerData: any;
  club: any;
  private id: string;
  private DetailsDatabyId: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private transactionDetailsService: TransactionDetailsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.getDetails(id);
  }
  private getDetails(id: string) {
    this.transactionDetailsService.getDetailsById(id).subscribe(data => {
      this.DetailsDatabyId = data;
      this.DetailsData = this.DetailsDatabyId[0];
    });
  }
}
