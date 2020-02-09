import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHouseDetailsComponent } from './exchange-house-details.component';

describe('ExchangeHouseDetailsComponent', () => {
  let component: ExchangeHouseDetailsComponent;
  let fixture: ComponentFixture<ExchangeHouseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHouseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
