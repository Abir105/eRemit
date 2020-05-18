import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class TreasuryApprovalService {
  Url = 'http://10.11.201.87:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }

  public getTreasury = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'treasury_approval');
  };
  public delete = (body) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {Id: body},
    };
    return this.http.delete(this.Url + 'treasury_approval', options);
  };

  public approveRow = (route:string, element) => {
    console.log(element, 'service');
    return this.http.put(this.Url + 'treasury_approval/approve', element);
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
