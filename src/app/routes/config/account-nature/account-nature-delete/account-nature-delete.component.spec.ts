import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNatureDeleteComponent } from './account-nature-delete.component';

describe('AccountNatureDeleteComponent', () => {
  let component: AccountNatureDeleteComponent;
  let fixture: ComponentFixture<AccountNatureDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNatureDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNatureDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
