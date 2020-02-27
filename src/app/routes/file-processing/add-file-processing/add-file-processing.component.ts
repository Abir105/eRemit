import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileProcessingService } from '@core/services/file-processing.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as XLSX from 'ts-xlsx';
import { MatTableDataSource } from '@angular/material/table';
import { FileProcessingInfo } from '../../model/FileProcessingInfo';


@Component({
  selector: 'app-add-file-processing',
  templateUrl: './add-file-processing.component.html',
  styleUrls: ['./add-file-processing.component.scss'],
})
export class AddFileProcessingComponent implements OnInit {
  public dataSource = new MatTableDataSource<FileProcessingInfo>();
  public doFilter = (value: string) => {
    value = value.trim(); // Remove whitespace
    value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = value;
  };


  [x: string]: any;
  public displayedColumns = ['ID','Sl_No', 'TT_No', 'Date', 'Amount', 'Beneficiary', 'AC_No', 'Bank', 'Branch', 'Payment', 'Remitter', 'City_Remitter', 'Amount_words', 'Cont_Benef','Routing_No'];
  fileProcessing = Subscription;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  private ex_house_code: string;
  private xPressMoneyName: string;
  private uploadFileData: string;
  date: string;

  get formArray(): AbstractControl | null {
    return this.reactiveForm1.get('formArray');
  }

  constructor(private router: Router, private _formBuilder: FormBuilder, private fb: FormBuilder, private fileProcessingService: FileProcessingService) {
  }

  ngOnInit() {

    this.reactiveForm1 = this.fb.group({

      formArray: this.fb.array([
        this.fb.group({}),
        this.fb.group({}),
        this.fb.group({}),
        this.fb.group({}),
      ]),
    });
    this.getAllXpressMoneyName();
    this.getAllUploadFileData();
  }

  private getAllUploadFileData() {
    this.fileProcessingService.getUploadFileData('uploadFileData')
      .subscribe(res => {
        this.uploadFileData = res.data;
      });
  }
  private getAllXpressMoneyName() {
    this.fileProcessingService.getXpressMoneyName('xPressMoneyName')
      .subscribe(res => {
        this.xPressMoneyName = res.data;
      });
  }
  StepperNext(ex_house_name, ex_house_code){
    // @ts-ignore
    this.showDataOb = {ex_house_name, ex_house_code};
    console.log(this.showDataOb);
  }
//file upload
  arrayBuffer: any;
  file: File;

  incomingfile(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
  }

  Upload() {
    var fileDoc = { ex_house_code: this.showDataOb.ex_house_code, file_name: this.file.name}
    var myJSON = JSON.stringify(fileDoc);
    console.log(myJSON);
    this.fileProcessingService.fileName({ route: 'fileName', body: myJSON }).subscribe(dd =>{
      console.log(dd);
    });
    console.log( myJSON , 'myJson');

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      this.fileProcessingService.addFileUpload({ route: 'addFileUpload', body: jsonData })
        .subscribe(data => {
          this.notification.successmsg('File was uploaded successfully');
          this.reactiveForm1.reset();
        }, (err) => {
          this.notification.errorsmsg('Sorry! file can not be added');
        });
    };
    fileReader.readAsArrayBuffer(this.file);
  }

}
