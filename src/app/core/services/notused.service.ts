import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotusedService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  postData(dataStr) {
     console.log(dataStr);
     this.http.post('http://10.11.201.37:3000/addCountry', dataStr, this.httpOptions)
      .subscribe(
        data  => {
            alert('POST Request is successful'+ data);
        },
        error  => {
          alert('Error'+ error);
        }

      );

  }
}
