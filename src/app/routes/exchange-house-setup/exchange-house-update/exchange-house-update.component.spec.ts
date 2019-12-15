import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHouseUpdateComponent } from './exchange-house-update.component';

describe('ExchangeHouseUpdateComponent', () => {
  let component: ExchangeHouseUpdateComponent;
  let fixture: ComponentFixture<ExchangeHouseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHouseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHouseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
