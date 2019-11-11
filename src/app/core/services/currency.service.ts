import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from '@env/environment.prod';
import { CountryInfo } from 'app/routes/model/countryInfo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  public getData = (route: string): Observable<any> => {
    // console.log( '${envAddress}/${route}');
    return this.http.get('http://10.11.201.37:3001/currencies'); // this.createCompleteRoute(route, environment.SERVER_URL));
    // return this.http.get(this.createCompleteRoute(route, environment.SERVER_URL));
  };

  public create = ({ route, body }: { route: string, body: any }) => {
    // return this.http.post(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    console.log(body);
    return this.http.post('http://10.11.201.37:3001/addCurrency', body);
  };


  public delete = (body) => {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {cur_short_name: body},
    };
    return this.http.delete('http://10.11.201.37:3001/deleteCurrency', options);
    // return this.http.put(this.createCompleteRoute(route, environment.SERVER_URL), body, this.generateHeaders());
    // return this.http.put('http://10.11.201.37:3000/updateCountry', body);
  };

  public update = (route: string, element) => {
    console.log(element);
    return this.http.put('http://10.11.201.37:3001/updateCurrency', element);
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


