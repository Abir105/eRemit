import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeDeleteComponent } from './account-type-delete.component';

describe('AccountTypeDeleteComponent', () => {
  let component: AccountTypeDeleteComponent;
  let fixture: ComponentFixture<AccountTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
