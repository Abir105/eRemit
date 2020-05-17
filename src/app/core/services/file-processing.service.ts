import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { logger } from 'codelyzer/util/logger';


@Injectable({
  providedIn: 'root'
})
export class FileProcessingService {
  Url = 'http://10.11.201.92:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }
  public getX = (): Observable<any> => {
    console.log('seragagga');
    return this.http.get('http://10.11.201.37:5000/connect-to-cbs');
  };

  public getXpressMoneyName = (): Observable<any> => {
    return this.http.get(this.Url + 'file_processing');
  };
  public getIncompleteBatch = (): Observable<any> => {
    return this.http.get(this.Url + 'file_processing/exFileInfo');
  };

  /*public getXpressMoneyName = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'file_processing');
  };*/

  public getUploadFileData = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'file_processing/file_upload');
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  };
}



