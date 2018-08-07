import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostMoreDetailsComponent } from './total-cost-more-details.component';

describe('TotalCostMoreDetailsComponent', () => {
  let component: TotalCostMoreDetailsComponent;
  let fixture: ComponentFixture<TotalCostMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCostMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCostMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
