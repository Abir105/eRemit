import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from '@env/environment.prod';
import { CountryInfo } from 'app/routes/model/countryInfo';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { BankInfo } from '../../routes/model/BankInfo';

@Injectable({
  providedIn: 'root'
})

export class BankService {

  constructor(private http: HttpClient) { }

  // getDevision(): Observable<any> {
  //   return this.http.get<any>('http://10.11.201.40:3000/division').pipe(
  //     map(response => response.data
  //     ),
  //     catchError(error => of(null))
  //   );
  // }
  public getDevision = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.40:3000/location/division');
  };
  public getDistrict = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.40:3000/location/district');
  };
  public getUpzilla = (route: string): Observable<any> => {
    return this.http.get('http://10.11.201.40:3000/location/upzilla');
  };

  public getData = (route: string): Observable<any> => {
    // console.log( '${envAddress}/${route}');
    return this.http.get('http://10.11.201.40:3000/bank'); // this.createCompleteRoute(route, environment.SERVER_URL));
    // return this.http.get(this.createCompleteRoute(route, environment.SERVER_URL));
  };
  addBank(bank): Observable<any> {
    return this.http.post<any>('http://10.11.201.40:3000/bank/', bank).pipe(
      map(response => (response.isExecuted && response.data ? true : false)),
      catchError(error => of(false))
    );
  }

  public create = (route: string, body) => {
    // return this.http.post(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    console.log(body);
    return this.http.post('http://10.11.201.40:3000/bank', body);
  };


  public delete = (body) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {short_name: body},
    };
    return this.http.delete('http://10.11.201.37:3000/deleteCountry', options);
    // return this.http.put(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    // return this.http.put('http://10.11.201.37:3000/updateCountry', body);
  };

  public update = (route: string, element) => {
    console.log(element);
    return this.http.put('http://10.11.201.37:3000/updateCountry', element);
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

