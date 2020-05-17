import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {
  Url = 'http://10.11.201.87:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }



  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  };

  getDetailsById(id: string): Observable<any> {
    return this.http.get<any>(this.Url + `exHouseSetup/${id}`).pipe(
      map(response => response.data
      ),
      catchError(error => of(null))
    );
  }
}



