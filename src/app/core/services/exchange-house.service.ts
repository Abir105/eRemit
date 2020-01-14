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
  addExchangeHouse(exHouse): Observable<any> {
    return this.http.post<any>(this.Url + 'exHouseSetup/', exHouse).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
  public delete = (id) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(this.Url + `exHouseSetup/${id}`, options);
  };
}
