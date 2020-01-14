import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountNatureService {
  Url = 'http://10.11.201.67:3001/';
   constructor(private http: HttpClient) {
  }

  public getData = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.67:3001/account_nature');
  };


  // tslint:disable-next-line:variable-name
  public account_nature_create = ({ route, body }: { route: string, body: any }) => {
    // return this.http.post(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    console.log(body);
    return this.http.post('http://10.11.201.67:3001/account_nature', body);
  };
  public delete = (curid) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(`http://10.11.201.67:3001/account_nature/${curid}`, options);
  };

  public updateaccountnature = (route: string, element) => {
    console.log(element);
    return this.http.put('http://10.11.201.67:3001/account_nature', element);
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  addCurrency(currency): Observable<any> {
    return this.http.post<any>(this.Url + 'account_nature/', currency).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
}


