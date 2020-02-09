import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileProcessingService } from '@core/services/file-processing.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';



@Component({
  selector: 'app-add-file-processing',
  templateUrl: './add-file-processing.component.html',
  styleUrls: ['./add-file-processing.component.scss']
})
export class AddFileProcessingComponent implements OnInit {


  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  fileProcessing = { };
  get formArray(): AbstractControl | null { return this.reactiveForm1.get('formArray'); }

  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder, private fileProcessingService : FileProcessingService) {}
  ngOnInit() {

    this.reactiveForm1 = new FormGroup({

    });

  }

}
