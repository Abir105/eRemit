import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CountryInfo } from '../../../model/countryInfo';
import { BankInfo } from '../../../model/BankInfo';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {

  public dataSource = new MatTableDataSource<BankInfo>();
  public displayedColumns = ['sl', 'name', 'bank_code', 'update', 'delete'];

  constructor() { }

  ngOnInit() {
  }
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };

  UpdateCountry(element: any) {
  }

  // tslint:disable-next-line:variable-name
  deleteCountryRow(short_name: any) {
  }

  addNew() {

  }
}
