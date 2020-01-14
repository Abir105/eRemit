import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNatureCreateComponent } from './account-nature-create.component';

describe('AccountNatureCreateComponent', () => {
  let component: AccountNatureCreateComponent;
  let fixture: ComponentFixture<AccountNatureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNatureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
