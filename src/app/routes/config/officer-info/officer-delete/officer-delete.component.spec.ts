import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerDeleteComponent } from './officer-delete.component';

describe('OfficerDeleteComponent', () => {
  let component: OfficerDeleteComponent;
  let fixture: ComponentFixture<OfficerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
