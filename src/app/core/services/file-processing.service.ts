import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileProcessingService {
  Url = 'http://10.11.201.92:3001/';
  private httpClient: any;
  constructor(private http: HttpClient) { }

  public getXpressMoneyName = (route: string): Observable<any> => {
    return this.http.get(this.Url + 'ex_house_name');
  };
  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  };

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  //file upload
  // private uploaded_file: any;
  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'http://10.11.201.87:3001/ex_house_name';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: this.uploaded_file })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }

  // private handleError(e: any) {
  //   return undefined;
  // }

  public addFileUpload = ({ route, body }: { route: string, body: any }) => {
    console.log(body);
    return this.http.post('http://10.11.201.92:3001/ex_house_name', body);
  };
}


