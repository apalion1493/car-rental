import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackPageComponent } from './cash-back-page.component';

describe('CashBackPageComponent', () => {
  let component: CashBackPageComponent;
  let fixture: ComponentFixture<CashBackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
