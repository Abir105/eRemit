import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification-comp',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationCompoComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  successmsg(msg) {
    this.toastr.success(msg, 'Success');
  }
  errorsmsg(msg) {
    this.toastr.error(msg, 'Error');

  }
  infotoastr() {
    this.toastr.info('Important News', 'Information');
  }
  toastrwaring() {
    this.toastr.warning('Battery about to Die', 'Warning');
  }

}
