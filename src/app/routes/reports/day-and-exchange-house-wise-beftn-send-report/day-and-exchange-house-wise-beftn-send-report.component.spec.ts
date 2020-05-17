import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAndExchangeHouseWiseBEFTNSendReportComponent } from './day-and-exchange-house-wise-beftn-send-report.component';

describe('DayAndExchangeHouseWiseBEFTNSendReportComponent', () => {
  let component: DayAndExchangeHouseWiseBEFTNSendReportComponent;
  let fixture: ComponentFixture<DayAndExchangeHouseWiseBEFTNSendReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAndExchangeHouseWiseBEFTNSendReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAndExchangeHouseWiseBEFTNSendReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
