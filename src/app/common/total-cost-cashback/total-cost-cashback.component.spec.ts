import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostCashbackComponent } from './total-cost-cashback.component';

describe('TotalCostCashbackComponent', () => {
  let component: TotalCostCashbackComponent;
  let fixture: ComponentFixture<TotalCostCashbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCostCashbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCostCashbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
