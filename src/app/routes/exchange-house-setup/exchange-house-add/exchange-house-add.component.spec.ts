import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHouseAddComponent } from './exchange-house-add.component';

describe('ExchangeHouseAddComponent', () => {
  let component: ExchangeHouseAddComponent;
  let fixture: ComponentFixture<ExchangeHouseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHouseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHouseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
