import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNatureUpdateComponent } from './account-nature-update.component';

describe('AccountNatureUpdateComponent', () => {
  let component: AccountNatureUpdateComponent;
  let fixture: ComponentFixture<AccountNatureUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNatureUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNatureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
