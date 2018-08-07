import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTransportBookingSectionComponent } from './rental-transport-booking-section.component';

describe('RentalTransportBookingSectionComponent', () => {
  let component: RentalTransportBookingSectionComponent;
  let fixture: ComponentFixture<RentalTransportBookingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalTransportBookingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalTransportBookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
