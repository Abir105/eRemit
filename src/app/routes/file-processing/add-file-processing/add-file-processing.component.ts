import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileProcessingService } from '@core/services/file-processing.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as XLSX from 'ts-xlsx';
<<<<<<< HEAD
import { CompletedBatchesComponent } from '../completed-batches/completed-batches.component';
import { PageEvent } from '@angular/material/paginator';
import { OrderPipe } from 'ngx-order-pipe';
import { MatTableDataSource } from '@angular/material/table';
export interface DialogData {
  animal: string;
  name: string;
}
=======
import { MatTableDataSource } from '@angular/material/table';
import { FileProcessingInfo } from '../../model/FileProcessingInfo';
>>>>>>> 03b6a2a97744e3013ad7e40f8ed7e119fcab8d43

@Component({
  selector: 'app-add-file-processing',
  templateUrl: './add-file-processing.component.html',
  styleUrls: ['./add-file-processing.component.scss'],
})
export class AddFileProcessingComponent implements OnInit {
<<<<<<< HEAD
  order = 'ex_house_name';
  searchText;
  animal: string;
  name: string;
  [x: string]: any;
  fileProcessing = Subscription;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  fileToUpload: File = null;
  dataSource: any;
  displayedColumns: any;
  xPressMoneyName = [];
  pagedList = [];
  length = 0;
  pageSize = 3;
  pageSizeOptions: number[] = [3];
  breakpoint = 3;
  date: string;
  isShow: any;
  get formArray(): AbstractControl | null { return this.reactiveForm1.get('formArray'); }
  sortedCollection: any[];

  constructor(private router: Router, private fb: FormBuilder,
              private fileProcessingService: FileProcessingService,
              public dialog: MatDialog, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.pagedList, 'ex_house_name');
  }
=======
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

>>>>>>> 03b6a2a97744e3013ad7e40f8ed7e119fcab8d43
  ngOnInit() {
    this.reactiveForm1 = this.fb.group({

      formArray: this.fb.array([
<<<<<<< HEAD
        this.fb.group({
          searchText: ['', [Validators.required]],
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
  public getAllXpressMoneyName = () => {
    this.fileProcessingService.getXpressMoneyName()
      .subscribe(res  => {
        this.xPressMoneyName = res.data;
        this.pagedList = this.xPressMoneyName.slice(0, 3);
        this.length = this.xPressMoneyName.length;
        // this.xPressMoneyName.paginator = this.paginator;
      });
  };
  OnPageChange(event: PageEvent) { const startIndex = event.pageIndex * event.pageSize;
                                   let endIndex = startIndex + event.pageSize;
                                   if (endIndex > this.length) { endIndex = this.length; }
                                   this.pagedList = this.xPressMoneyName.slice(startIndex, endIndex);
  }

  // onResize(event) {  this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3; }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompletedBatchesComponent, {
      width: '500px',
      height: '320px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
=======
        this.fb.group({}),
        this.fb.group({}),
        this.fb.group({}),
        this.fb.group({}),
      ]),
    });
    this.getAllXpressMoneyName();
    this.getAllUploadFileData();
>>>>>>> 03b6a2a97744e3013ad7e40f8ed7e119fcab8d43
  }

  private getAllUploadFileData() {
    this.fileProcessingService.getUploadFileData('uploadFileData')
      .subscribe(res => {
        this.uploadFileData = res.data;
      });
  }
<<<<<<< HEAD
  // uploadFileToActivity() {
  //   this.fileProcessingService.postFile(this.fileToUpload).subscribe(data => {
  //     console.log('File Uploaded Successfully.');
  //   }, error => {
  //     console.log(error);
  //   });
  // }

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

  arrayBuffer : any;

  file : File;
  incomingfile(event) {
    this.file = event.target.files[0];
=======
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
>>>>>>> 03b6a2a97744e3013ad7e40f8ed7e119fcab8d43
  }
//file upload
  arrayBuffer: any;
  file: File;

<<<<<<< HEAD
  Upload(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary'});
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet,{raw: true}));
    }
    fileReader.readAsArrayBuffer(this.file);
    const data1 = file;
    console.log(data1);
    this.fileProcessingService.addFileUpload({ route: 'addFileUpload', body: data1 })
    // tslint:disable-next-line:no-shadowed-variable
      .subscribe(data => {
        this.notification.successmsg('File was uploaded successfully');
        this.reactiveForm1.reset();
      }, (err) => {
        this.notification.errorsmsg('Sorry! file can not be added');
      });


=======
  incomingfile(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
>>>>>>> 03b6a2a97744e3013ad7e40f8ed7e119fcab8d43
  }

  Upload() {
    var fileDoc = { ex_house_code: this.showDataOb.ex_house_code, file_name: this.file.name}
    var myJSON = JSON.stringify(fileDoc);
    console.log(myJSON);
    this.fileProcessingService.fileName({ route: 'fileName', body: myJSON }).subscribe(dd =>{
      console.log(dd);
    });
    console.log( myJSON , 'myJson');

    // let fileReader = new FileReader();
    // fileReader.onload = (e) => {
    //   this.arrayBuffer = fileReader.result;
    //   var data = new Uint8Array(this.arrayBuffer);
    //   var arr = new Array();
    //   for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    //   var bstr = arr.join('');
    //   var workbook = XLSX.read(bstr, { type: 'binary' });
    //   var first_sheet_name = workbook.SheetNames[0];
    //   var worksheet = workbook.Sheets[first_sheet_name];
    //   var jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    //
    //   this.fileProcessingService.addFileUpload({ route: 'addFileUpload', body: jsonData })
    //     .subscribe(data => {
    //       this.notification.successmsg('File was uploaded successfully');
    //       this.reactiveForm1.reset();
    //     }, (err) => {
    //       this.notification.errorsmsg('Sorry! file can not be added');
    //     });
    // };
    // fileReader.readAsArrayBuffer(this.file);
  }

}
