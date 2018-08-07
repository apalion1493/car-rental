import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackTableComponent } from './cash-back-table.component';

describe('CashBackTableComponent', () => {
  let component: CashBackTableComponent;
  let fixture: ComponentFixture<CashBackTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBackTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
