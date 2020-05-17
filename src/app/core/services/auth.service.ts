import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string ) {
    return this.http.post<any>('http://10.11.201.87:3001/login/token', {email, password});
  }
}

