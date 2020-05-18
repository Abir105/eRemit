import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentAddComponent } from './cash-payment-add.component';

describe('CashPaymentAddComponent', () => {
  let component: CashPaymentAddComponent;
  let fixture: ComponentFixture<CashPaymentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
