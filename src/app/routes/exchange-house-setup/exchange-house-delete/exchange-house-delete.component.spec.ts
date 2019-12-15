import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHouseDeleteComponent } from './exchange-house-delete.component';

describe('ExchangeHouseDeleteComponent', () => {
  let component: ExchangeHouseDeleteComponent;
  let fixture: ComponentFixture<ExchangeHouseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHouseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHouseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
