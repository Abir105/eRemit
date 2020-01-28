import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeHouseService {
  Url = 'http://10.11.201.67:3001/';

  constructor(private http: HttpClient) { }

  public exHouseList = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'exHouseSetup');
  };
  getExhouseById(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `exHouseSetup/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  getDabitIns(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `exHouseSetup/dbtInfo/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  getExhouseOfficer(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `exHouseSetup/officer/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  addExchangeHouse(exHouse): Observable<any> {
    return this.http.post<any>(this.Url + 'exHouseSetup/', exHouse).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
  updateExchangeHouse(exHouse): Observable<any> {
    return this.http.put<any>(this.Url + 'exHouseSetup/', exHouse).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
  delete(id: string): Observable<void> {
    return this.http.delete<any>(this.Url + `exHouseSetup/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  deleteDebitIns(id: string): Observable<void> {
    return this.http.delete<any>(this.Url + `exHouseSetup/debitFrom/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  deleteExOfficer(id: string): Observable<void> {
    return this.http.delete<any>(this.Url + `exHouseSetup/exOfficer/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
}
