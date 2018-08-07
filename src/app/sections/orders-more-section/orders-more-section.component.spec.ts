import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMoreSectionComponent } from './orders-more-section.component';

describe('OrdersMoreSectionComponent', () => {
  let component: OrdersMoreSectionComponent;
  let fixture: ComponentFixture<OrdersMoreSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMoreSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
