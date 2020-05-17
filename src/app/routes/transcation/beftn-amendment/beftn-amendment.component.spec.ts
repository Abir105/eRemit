import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeftnAmendmentComponent } from './beftn-amendment.component';

describe('BeftnAmendmentComponent', () => {
  let component: BeftnAmendmentComponent;
  let fixture: ComponentFixture<BeftnAmendmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeftnAmendmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeftnAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
