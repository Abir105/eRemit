import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeDeleteComponent } from './payment-type-delete.component';

describe('PaymentTypeDeleteComponent', () => {
  let component: PaymentTypeDeleteComponent;
  let fixture: ComponentFixture<PaymentTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
