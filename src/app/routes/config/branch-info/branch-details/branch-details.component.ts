import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '@core/services/bank.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.scss']
})
export class BranchDetailsComponent implements OnInit {
  branchDetailsDatabyId: any;
  branchDetailsData: any;
  private id: string;

  constructor( private route: ActivatedRoute, private bankService: BankService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.getBranchDetails(id);
  }
  private getBranchDetails(id: string) {
    this.bankService.getBranchById(id).subscribe(data => {
      this.branchDetailsDatabyId = data;
      this.branchDetailsData = this.branchDetailsDatabyId[0];
    });

  }

}
