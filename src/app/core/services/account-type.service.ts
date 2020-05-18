import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountTypeService {
  Url = 'http://10.11.201.87:3001/';
  constructor(private http: HttpClient) {
  }

  public getData = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.87:3001/account_type');
  };

  public accounttypecreate = ({ route, body }: { route: string, body: any }) => {

    console.log(body);
    return this.http.post('http://10.11.201.87:3001/account_type', body);
  };
  public delete = (actid) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(`http://10.11.201.87:3001/account_type/${actid}`, options);
  };

  public updateaccounttype = (route: string, element) => {
    console.log(element);
    return this.http.put('http://10.11.201.87:3001/account_type', element);
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  addCurrency(currency): Observable<any> {
    return this.http.post<any>(this.Url + 'account_type/', currency).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
}


