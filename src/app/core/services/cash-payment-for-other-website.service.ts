import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CashPaymentForOtherWebsiteService {
  Url = 'http://10.11.201.87:3001/';
  constructor(private http: HttpClient) { }

   // public getCashPaymentForOtherWebsite = (route: string): Observable<any> => {
  //  return this.http.get(this.Url + 'cash-payment-for-other-website');
 // };
//"http://10.11.201.87:3001/incentive_ex_house
  public addCashPaymentForOtherWebsite = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post('http://10.11.201.87:3001/incentive_ex_house', body);
  };

  public getIncentivePercentage = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'incentive_ex_house');
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }}
