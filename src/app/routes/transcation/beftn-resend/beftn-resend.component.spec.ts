import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeftnResendComponent } from './beftn-resend.component';

describe('BeftnResendComponent', () => {
  let component: BeftnResendComponent;
  let fixture: ComponentFixture<BeftnResendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeftnResendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeftnResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
