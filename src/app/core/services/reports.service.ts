import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  apiUrl = 'http://localhost:3001/reports';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  // fetch data from backend
  getExchangeHosueNameAndCode(): Observable<any> {
    const API_URL = `${this.apiUrl}/exchangehouse`;
    return this.http.get(API_URL);

  }


  getExcelWiseReport(exchangeHosueCode, excelNo, Date): Observable<any> {
    const API_URL = `${this.apiUrl}/excelwisereports/${exchangeHosueCode}/${excelNo}/${Date}`;
    return this.http.get(API_URL);
  }

}
