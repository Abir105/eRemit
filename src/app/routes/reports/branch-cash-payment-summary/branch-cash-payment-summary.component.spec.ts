import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCashPaymentSummaryComponent } from './branch-cash-payment-summary.component';

describe('BranchCashPaymentSummaryComponent', () => {
  let component: BranchCashPaymentSummaryComponent;
  let fixture: ComponentFixture<BranchCashPaymentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchCashPaymentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchCashPaymentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
