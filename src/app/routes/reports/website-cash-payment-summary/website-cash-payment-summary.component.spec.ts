import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteCashPaymentSummaryComponent } from './website-cash-payment-summary.component';

describe('WebsiteCashPaymentSummaryComponent', () => {
  let component: WebsiteCashPaymentSummaryComponent;
  let fixture: ComponentFixture<WebsiteCashPaymentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteCashPaymentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteCashPaymentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
