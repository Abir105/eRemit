import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileProcessingService {
  Url = 'http://10.11.201.67:3001/';
  constructor(private http: HttpClient) { }

  // addFileProcessing(fileProcessing): Observable<any> {
  //   return this.http.post<any>(this.Url + 'fileProcessingSetup/', fileProcessing).pipe(
  //     map(response => (!!(response.isExecuted && response.data))),
  //     catchError(error => of(false))
  //   );
  // }

}
