import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class IncentiveService {
  Url = 'http://10.11.201.87:3001/';
  constructor(private http: HttpClient) { }

  public getIncentive = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'incentive');
  };
  public create = ({ route, body }: { route: string, body: any }) => {
    // return this.http.post(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    console.log(body);
    return this.http.post('http://10.11.201.87:3001/incentive', body);
  };

  public delete = (body) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {id: body},
    };
    return this.http.delete('http://10.11.201.87:3001/incentive', options);
    // return this.http.put(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    // return this.http.put('http://10.11.201.37:3000/updateCountry', body);
  };

  public update = (route: string, element) => {
    console.log(element);
    return this.http.put('http://10.11.201.87:3001/incentive', element);
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

}
