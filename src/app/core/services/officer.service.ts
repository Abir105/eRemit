import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  Url = 'http://10.11.201.92:3001/';

  constructor(private http: HttpClient) { }

  public officerList = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'officer');
  };
  public addOfficer = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post(this.Url + 'officer', body);
  };
  public delete = (id) => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(this.Url + `officer/${id}`, options);
  };
  public update = (route: string, element) => {
    console.log(element);
    return this.http.put(this.Url + 'officer/', element);
  };
}
