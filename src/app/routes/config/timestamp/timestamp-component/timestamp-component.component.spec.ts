import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampComponentComponent } from './timestamp-component.component';

describe('TimestampComponentComponent', () => {
  let component: TimestampComponentComponent;
  let fixture: ComponentFixture<TimestampComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
