import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeHouseService {
  Url = 'http://10.11.201.92:3001/';

  constructor(private http: HttpClient) { }

  public exHouseList = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'exHouseSetup');
  };
}
