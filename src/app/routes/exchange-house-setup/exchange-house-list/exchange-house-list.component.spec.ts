import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeHouseListComponent } from './exchange-house-list.component';

describe('ExchangeHouseListComponent', () => {
  let component: ExchangeHouseListComponent;
  let fixture: ComponentFixture<ExchangeHouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeHouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
