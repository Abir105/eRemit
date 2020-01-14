import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNatureListComponent } from './account-nature-list.component';

describe('AccountNatureListComponent', () => {
  let component: AccountNatureListComponent;
  let fixture: ComponentFixture<AccountNatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
