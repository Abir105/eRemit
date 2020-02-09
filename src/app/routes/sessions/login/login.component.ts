import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  ngOnInit() {}

  login(data) {
    const remitdt = 'remit';
    if (data.userName === remitdt && data.password === remitdt ) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.toastr.error('Please Provide valid Username and Password');
    }
  }
}
