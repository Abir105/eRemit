import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class TreasuryService {
  Url = 'http://10.11.201.87:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }

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
  }
  public addFileUpload = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post('http://10.11.201.87:3001/file_processing', body);
  };
  public fileName = ({ route, body }: { route: string, body: any }) => {
    console.log(body , "service");
    const config = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post('http://10.11.201.87:3001/file_processing/file_name', body,{ headers: config });

  };

}


