import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from '@env/environment.prod';
import { CountryInfo } from 'app/routes/notificationComp/model/countryInfo';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { BankInfo } from '../../routes/notificationComp/model/BankInfo';

@Injectable({
  providedIn: 'root'
})

export class BankService {
  Url = 'http://10.11.201.92:3001/';
  Url2 = 'http://10.11.201.87:3001/';

  constructor(private http: HttpClient) { }

  // getDevision(): Observable<any> {
  //   return this.http.get<any>('http://10.11.201.40:3000/division').pipe(
  //     map(response => response.data
  //     ),
  //     catchError(error => of(null))
  //   );
  // }
  public getDevision = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'location/division');
  };
  public getDistrict = (route: string, id: string): Observable<any> => {
    return this.http.get(this.Url + `location/district/${id}`);
  };
  public getUpzilla = (route: string, id: string): Observable<any> => {
    return this.http.get(this.Url + `location/upzilla/${id}`);
  };
  public getCountry = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'country');
  };

  public getData = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'bank');
  };
  getBankId(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `bank/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  getBranchByBankCode(bc: string): Observable<any> {
    return this.http.get<any>(this.Url + `branch/bankcode/${bc}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
  getBranchById(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `branch/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }

  addBank(bank): Observable<any> {
    return this.http.post<any>(this.Url + 'bank/', bank).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
  branchAdd(branch): Observable<any> {
    return this.http.post<any>(this.Url + 'branch', branch).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
  bankUpdate(bank): Observable<any> {
    return this.http.put<any>(this.Url + 'bank/', bank).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }
  branchUpdate(branch): Observable<any> {
    return this.http.put<any>(this.Url + 'branch/', branch).pipe(
      map(response => (!!(response.isExecuted && response.data))),
      catchError(error => of(false))
    );
  }

  public create = (route: string, body) => {
    console.log(body);
    return this.http.post(this.Url + 'bank', body);
  };


  public delete = (id) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(this.Url + 'bank/${id}', options);
    // return this.http.put(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    // return this.http.put('http://10.11.201.37:3000/updateCountry', body);
  };
  public deleteBranch = (id) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(this.Url + 'branch/${id}', options);
  };

  public update = (route: string, element) => {
    console.log(element);
    return this.http.put(this.Url + 'updateCountry', element);
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

