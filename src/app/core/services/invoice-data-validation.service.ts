import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class InvoiceDataValidationService {

  constructor(private http: HttpClient) {
  }
  public getData = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.87:3001/invoice');
  };

  releaseRow = (route:string, element) => {
    console.log(element, 'service');
    return this.http.put( 'http://10.11.201.87:3001/invoice', element);
  };
}
