import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TreasuryService {
  Url = 'http://10.11.201.87:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }

  public getUploadFileData = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'treasury_file_upload');
  };

  public getCurs = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'treasury_file_upload/cur');
  };
  public addFileUpload = ({ route, body }: { route: string, body: any }) => {
    console.log(body, "service");
    return this.http.post(this.Url + 'treasury_file_upload', body);
  };

  public delete = (body) => {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), body: {Id: body}, };
    return this.http.delete(this.Url + 'treasury_file_upload', options);
  };

  public update = (route: string, s) => {
    console.log(s,"serviceUp");
    return this.http.put(this.Url + 'treasury_file_upload', s);
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



