import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReportModalPopupComponent } from './print-report-modal-popup.component';

describe('PrintReportModalPopupComponent', () => {
  let component: PrintReportModalPopupComponent;
  let fixture: ComponentFixture<PrintReportModalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintReportModalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintReportModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
