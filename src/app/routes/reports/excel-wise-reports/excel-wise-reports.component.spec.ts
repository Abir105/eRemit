import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelWiseReportsComponent } from './excel-wise-reports.component';

describe('ExcelWiseReportsComponent', () => {
  let component: ExcelWiseReportsComponent;
  let fixture: ComponentFixture<ExcelWiseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelWiseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelWiseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
