import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectedCashPaymentForOtherWebSiteService {

  constructor(private http: HttpClient) {
  }
  public getData = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.87:3001/connectedCPFOW');
  };
}
