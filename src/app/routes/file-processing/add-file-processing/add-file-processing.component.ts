import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileProcessingService } from '@core/services/file-processing.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as XLSX from 'ts-xlsx';
import { CompletedBatchesComponent } from '../completed-batches/completed-batches.component';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-add-file-processing',
  templateUrl: './add-file-processing.component.html',
  styleUrls: ['./add-file-processing.component.scss']
})
export class AddFileProcessingComponent implements OnInit {
  animal: string;
  name: string;

  [x: string]: any;

  fileProcessing = Subscription;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  fileToUpload: File = null;
  dataSource: any;
  displayedColumns: any;
  private xPressMoneyName: string;
  date: string;
  isShow: any;
  get formArray(): AbstractControl | null { return this.reactiveForm1.get('formArray'); }

  constructor(private router: Router, private fb: FormBuilder, private fileProcessingService: FileProcessingService, public dialog: MatDialog) {}

  ngOnInit() {

    this.reactiveForm1 = this.fb.group({

      formArray: this.fb.array([
        this.fb.group({
        }),
        this.fb.group({
            date: ['', [Validators.required]],
          uploaded_file: ['', [Validators.required]],
        }),
        this.fb.group({

        }),
        this.fb.group({

        }),
        this.fb.group({

        }),
      ])
    });
    this.getAllXpressMoneyName();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CompletedBatchesComponent, {
      width: '500px',
      height: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  get data() { return this.reactiveForm1.get('data'); }
  get file1() { return this.reactiveForm1.get('file1'); }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  // uploadFileToActivity() {
  //   this.fileProcessingService.postFile(this.fileToUpload).subscribe(data => {
  //     console.log('File Uploaded Successfully.');
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  private getAllXpressMoneyName() {
    this.fileProcessingService.getXpressMoneyName('xPressMoneyName')
      .subscribe(res => {
        this.xPressMoneyName =  res.data;
      });
  }

  // fileUploadFormSubmit(date, uploaded_file) {
  //   let data = {
  //     date,
  //     uploaded_file
  //   }
  //     console.log(data);
  //     this.fileProcessingService.addFileUpload({ route: 'addFileUpload', body: data })
  //       .subscribe(data => {
  //         this.notification.successmsg('File was uploaded successfully');
  //         this.reactiveForm1.reset();
  //       }, (err) => {
  //         this.notification.errorsmsg('Sorry! file can not be added');
  //       });
  // }

  arrayBuffer:any;

  file:File;
  incomingfile(event)
  {

    this.file= event.target.files[0];
  }

  Upload(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
    }
    fileReader.readAsArrayBuffer(this.file);
    let data = file;
    console.log(data);
    this.fileProcessingService.addFileUpload({ route: 'addFileUpload', body: data })
      .subscribe(data => {
        this.notification.successmsg('File was uploaded successfully');
        this.reactiveForm1.reset();
      }, (err) => {
        this.notification.errorsmsg('Sorry! file can not be added');
      });


  }


}
