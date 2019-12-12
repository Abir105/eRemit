import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHouseSetupComponent } from './exchange-house-setup.component';

describe('ExchangeHouseSetupComponent', () => {
  let component: ExchangeHouseSetupComponent;
  let fixture: ComponentFixture<ExchangeHouseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHouseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHouseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
