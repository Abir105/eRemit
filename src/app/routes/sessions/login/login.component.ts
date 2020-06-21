import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@core/services/auth.service';
import { TokenParam } from './tokenParam';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  tokenParam: TokenParam;
  constructor(private fb: FormBuilder, private _router: Router,  private toastr: ToastrService ,private  authService : AuthService ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;

  ngOnInit() {}

token: any;
  login() {
    const val = this.loginForm.value;
    if (val.userName && val.password) {
      this.authService.gToken(val.userName, val.password)
        .subscribe(
                res => {
                  console.log(res);
                  localStorage.setItem('token', this.token);
                  this._router.navigate(['/dashboard']);
                  this.toastr.success('Logged in successfully')
                },
                err => {
                  if( err instanceof HttpErrorResponse){
                    if(err.status === 401){ this._router.navigate(['/login'])
                    }
                    this.toastr.error('Invalid Username and/or Password.');
                  }
                });
    }
  }
}
