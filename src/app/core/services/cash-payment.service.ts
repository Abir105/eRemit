import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CashPaymentService {
  Url = 'http://10.11.201.92:3001/';
  constructor(private http: HttpClient) { }

  public getReferenceNo = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'cashPayment/referenceNo');
  };
  getcashdata(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `cashPayment/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }

  public getIdentification = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'cashPayment/identificationType');
  };
}
