import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
 token:string = '';
  constructor(private http: HttpClient, private _router: Router) {}
public  verifyLogin({ route, body }: { route: string, body: any }){
  console.log(body);
    return this.http.post('http://10.11.201.92:3001/login/', body)
};
  public gToken(username: string, password: string ) {
    return this.http.post('http://10.11.201.92:3001/login/token', {username, password});
  };
  public loggedIn(){
    return !!localStorage.getItem('token');
  };
  public logoutUser(){
    return localStorage.removeItem('token')
    //this._router.navigate(['/login'])
  };
  public getToken(){
    return localStorage.getItem('token');
  };
}

