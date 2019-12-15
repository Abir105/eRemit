import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ExchangeHouseService } from '@core/services/exchange-house.service';
import { BankInfo } from '../../model/BankInfo';



@Component({
  selector: 'app-exchange-house-list',
  templateUrl: './exchange-house-list.component.html',
  styleUrls: ['./exchange-house-list.component.scss']
})
export class ExchangeHouseListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private exchangeHouseService: ExchangeHouseService ) {
  }

  ngOnInit() {
    this.getAllExchangeHouse();
  }

  public getAllExchangeHouse = () => {
    this.exchangeHouseService.exHouseList('exHouse')
      .subscribe(res  => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


