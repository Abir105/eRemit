import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileProcessingService } from '@core/services/file-processing.service';
import { NotificationCompoComponent } from '../../notificationComp/notificationCompo.component';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import * as XLSX from 'ts-xlsx';
import { CompletedBatchesComponent } from '../completed-batches/completed-batches.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { OrderPipe } from 'ngx-order-pipe';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-file-processing',
  templateUrl: './add-file-processing.component.html',
  styleUrls: ['./add-file-processing.component.scss'],
})
export class AddFileProcessingComponent implements OnInit {


  statusValue = 20;
  private jsonURL = 'src/assets/data.json';
  private isButtonVisible = false;
  private isTableVisible = false;
  order = 'ex_house_name';
  searchText;
  animal: string;
  name: string;
  uploadFileData: any;
  incompleteBatchData: any;
  [x: string]: any;
  fileProcessing = Subscription;
  subscription: Subscription;
  reactiveForm1: FormGroup;
  @ViewChild(NotificationCompoComponent, { static: false }) notification: NotificationCompoComponent;
  barValue = new FormControl('');
  fileToUpload: File = null;
  dataSource: any;
  jsonData: any;
  ttNoFromFile: any;
  displayedColumns: any;
  xPressMoneyName = [];
  pagedList = [];
  pagedList2 = [];
  paginatedFileData = [];
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [3, 5];
  breakpoint = 3;
  date: string;
  isShow: any;
  displayedColumn: string[] = [ 'InCompleteFileName'];
  dataSource1 = new MatTableDataSource<any>();
  get formArray(): AbstractControl | null { return this.reactiveForm1.get('formArray'); }
  sortedCollection: any[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('myInput', {static: true}) myInputVariable: ElementRef;

  constructor(private router: Router, private fb: FormBuilder,
              private fileProcessingService: FileProcessingService,
              public dialog: MatDialog, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.pagedList, 'ex_house_name');
  }
  ngOnInit() {
    this.reactiveForm1 = this.fb.group({

      formArray: this.fb.array([
        this.fb.group({
          searchText: ['', [Validators.required]],
        }),
        this.fb.group({
          date: ['', [Validators.required]],
          uploaded_file: ['', [Validators.required]],
        }),
        this.fb.group({
          barValue: [''],
        }),
        this.fb.group({

        }),
        this.fb.group({

        }),
      ])
    });
    this.getAllXpressMoneyName();
    this.getAllX();
  }
  public getAllX = () => {
    this.fileProcessingService.getX()
      .subscribe(res  => {
        console.log('response');
        console.log(res);
      });
  };

  public getAllXpressMoneyName = () => {
    this.fileProcessingService.getXpressMoneyName()
      .subscribe(res  => {
        this.xPressMoneyName = res.data;
        this.pagedList = this.xPressMoneyName.slice(0, 3);
        this.pagedList2 = this.xPressMoneyName.slice(3, 6);
        this.length = this.xPressMoneyName.length;
        this.getIncompleteBatchData();
        // this.xPressMoneyName.paginator = this.paginator;
      });
  };
  // OnPageChange(event: PageEvent) { const startIndex = event.pageIndex * event.pageSize;
  //                                  let endIndex = startIndex + event.pageSize;
  //                                  if (endIndex > this.length) { endIndex = this.length; }
  //                                  this.pagedList = this.xPressMoneyName.slice(startIndex, endIndex);
  // }

  // onResize(event) {  this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3; }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompletedBatchesComponent, {
      height: '310px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  private getAllUploadFileData() {
    this.fileProcessingService.getUploadFileData('uploadFileData')
      .subscribe(res => {
        this.uploadFileData = res.data;
        this.paginatedFileData = this.uploadFileData.slice(0, 3);
        this.length = this.uploadFileData.length;
        this.uploadFileData.paginator = this.paginator;
      });
  }
  OnDataPageChange(event: PageEvent)
  { const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) { endIndex = this.length; }
    this.paginatedFileData = this.uploadFileData.slice(startIndex, endIndex);
  }
  private getIncompleteBatchData() {
    this.fileProcessingService.getIncompleteBatch()
      .subscribe(res => {
        this.dataSource1 = res.data;
        this.incompleteBatchData = res.data;
      });
  }

  // tslint:disable-next-line: variable-name
  StepperNext(ex_house_name, ex_house_code) {
    // @ts-ignore
    this.showDataOb = {ex_house_name, ex_house_code};
    console.log(this.showDataOb, 'show dt');
  }
  // file upload
  arrayBuffer: any;
  file: File;
  pageEvent: void;

  incomingfile(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
  }

  Upload() {
    var fileDoc = { ex_house_code: this.showDataOb.ex_house_code, file_name: this.file.name}
    var myJSON = JSON.stringify(fileDoc);
    console.log(myJSON);
    this.fileProcessingService.fileName({ route: 'fileName', body: myJSON }).subscribe(dd => {
      console.log(dd,"asdvasgdasd");
    });
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      let data = new Uint8Array(this.arrayBuffer);
      let arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      let bstr = arr.join('');
      let workbook = XLSX.read(bstr, { type: 'binary' });
      let first_sheet_name = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[first_sheet_name];
      let jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      // for (let j = 0; j < jsonData.length; j++) {
      //   this.ttNoFromFile  = jsonData[j].TT_No;
      // this.getAllUploadFileData();
      // console.log(this.uploadFileData.TT_No);
      // }
      // console.log(this.ttNoFromFile,'tttNo');

      this.fileProcessingService.addFileUpload({ route: 'addFileUpload', body: jsonData })
        .subscribe(resp => {
          // console.log(jsonData , "json data")
          this.notification.successmsg('File was uploaded successfully');
          this.myInputVariable.nativeElement.value = '';
          this.getAllUploadFileData();
          this.isButtonVisible = true;
        }, (err) => {
          this.notification.errorsmsg('Sorry! file can not be added');
        });
    };
    fileReader.readAsArrayBuffer(this.file);
  }
  transectionApi() {
    const transactionData = {
      ex_code: '110',
      ex_acc_type: 'deb',
      ex_acc_no: '11025685',
      debit_from: '23589662555',
      gl_no: '256323',
      tt_no: '2368546',
      beni_name: 'Samsul Islam Khan',
      routing_no: '23584',
      beni_acc_no: '049340032841',
      amount: '50',
      payment_type: 'ACTRF',
      user_id: 'INPAYADM'
    };
    const jsonUR = this.jsonURL;
    const jsonData = JSON.stringify(transactionData);
    this.fileProcessingService.transactionApi
    ({ route: 'transactionApi', body: transactionData }).subscribe(res => {
      console.log(res, 'Transection API');
      this.notification.successmsg(res);
    }, (err) => {
      console.log(err,'erarara');
      this.notification.errorsmsg('Transaction not successful ');
    });
  }

  amlTableVisible() {
    this.isTableVisible = true;
    move();
    function move() {
      let i = 0;
      if (i === 0) {
        i = 1;
        const elem = document.getElementById('myBar');
        let width = 1;
        const id = setInterval(frame, 2000);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            console.log('clear')
            i = 0;
          } else {
            width += 20;
            elem.style.width = width + '%';
            console.log('clear')
            // f();
          }
        }
      }
    }
    function f() {
      this.statusValue += 20;
    }
  }

}


