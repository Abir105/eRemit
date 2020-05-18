import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreasuryService } from '@core/services/treasury.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface CurType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-treasury-update',
  templateUrl: './treasury-update.component.html',
  styleUrls: ['./treasury-update.component.scss']
})
export class TreasuryUpdateComponent implements OnInit {

  // curTypes:CurType[] = [
  //   {value: 'USD', viewValue: 'USD'},
  //   {value: 'CAD', viewValue: 'CAD'},
  //   {value: 'BDT', viewValue: 'BDT'},
  //   {value: 'Rs', viewValue: 'Rs'},
  //   {value: 'PR', viewValue: 'PR'},
  //   {value: 'Dollar', viewValue: 'Dollar'},
  // ];
  selectedCur = 0;
  description = 'Update a Treasury Info';
  reactiveForm1: FormGroup;
  s;
  Id: number;
  Cur: string;
  Stelar_Cur: string;
  private Curs: any;
  selectedValue: string;
  private cur_short_name;
  private data: string[];
  private cur: Subscription;
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public dialogRef: MatDialogRef<TreasuryUpdateComponent>, private fb: FormBuilder, private repoService: TreasuryService, @Inject(MAT_DIALOG_DATA) data) {
    this.reactiveForm1 = this.fb.group({
      Stelar_Cur: ['', [Validators.required]],
      Cur: ['', [Validators.required]],
    });
    this.s = data;
  }

  ngOnInit() {
    this.Id = this.s.Id;
    this.Stelar_Cur = this.s.Stelar_Cur;
    this.Cur = this.s.Cur;
    this.getAllCurs();
  }

  public getAllCurs = () => {
    this.repoService.getCurs('Curs')
      .subscribe(res => {
        this.curData = res.data;
      });
  };
  curData: any;
  onSelect(id) {
    this.selectedCur = id;
  }

  treasuryFormUpdate(data) {
    const updateTreasuryData = { Id: this.s.Id, Stelar_Cur: data.Stelar_Cur, Cur: data.Cur };
    this.repoService.update('TreasuryUpdate', updateTreasuryData)
      .subscribe(res => {
        this.dialogRef.close(JSON.stringify(res));
      });
  }
}
