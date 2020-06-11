import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsdSellingApprovalService {
  Url = 'http://10.11.201.87:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }

  public getUSDselling = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'usd_selling_approval');
  };

  public delete = (body) => {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), body: {id: body}, };
    return this.http.delete(this.Url + 'usd_selling_approval', options);
  };

  public approveRow = (route:string, s) => {
    console.log(s);
    return this.http.put(this.Url + 'usd_selling_approval/approve', s);
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  };
}
