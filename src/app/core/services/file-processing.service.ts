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

  public getUploadFileData = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'file_processing/file_upload');
  };

  public getIncompleteBatch = (): Observable<any> => {
    return this.http.get(this.Url + 'file_processing/InCompleteBatches');
  };
  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
  public addFileUpload = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post(this.Url + 'file_processing', body);
  };
  public fileName = ({ route, body }: { route: string, body: any }) => {
    console.log(body , 'service');
    const config = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post(this.Url + 'file_processing/file_name', body, { headers: config });

  };
  public transactionApi = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post('10.11.201.37:5000/connect-to-cbs-via-json', body);
   // return this.http.post(this.Url + 'file_processing/testPost', body );

  };

}



