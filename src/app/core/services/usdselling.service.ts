import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class USDSellingService {
  Url = 'http://10.11.201.87:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }

  public getUsdsellingData = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'treasury_usd_selling');
  };

  public addUSDsellingApproval = ({ route, body }: { route: string, body: any }) => {
    console.log(body, 'Service');
    return this.http.post(this.Url + 'treasury_usd_selling', body);
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  };


}
