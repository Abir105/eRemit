import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerAddComponent } from './officer-add.component';

describe('OfficerAddComponent', () => {
  let component: OfficerAddComponent;
  let fixture: ComponentFixture<OfficerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
