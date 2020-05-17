import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  Url = 'http://10.11.201.87:3001/';

  constructor(private http: HttpClient) { }

  public paymentTypeList = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'paymentType');
  };
  public addPaymentType = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post(this.Url + 'paymentType', body);
  };
  public delete = (id) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(this.Url + `paymentType/${id}`, options);
  };

  public update = (route: string, element) => {
    console.log(element);
    return this.http.put(this.Url + 'paymentType/', element);
  };
}
