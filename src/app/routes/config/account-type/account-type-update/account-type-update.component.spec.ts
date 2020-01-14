import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeUpdateComponent } from './account-type-update.component';

describe('AccountTypeUpdateComponent', () => {
  let component: AccountTypeUpdateComponent;
  let fixture: ComponentFixture<AccountTypeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
