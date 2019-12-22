import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerUpdateComponent } from './officer-update.component';

describe('OfficerUpdateComponent', () => {
  let component: OfficerUpdateComponent;
  let fixture: ComponentFixture<OfficerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
