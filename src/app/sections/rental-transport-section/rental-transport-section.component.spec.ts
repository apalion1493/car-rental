import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTransportSectionComponent } from './rental-transport-section.component';

describe('RentalTransportSectionComponent', () => {
  let component: RentalTransportSectionComponent;
  let fixture: ComponentFixture<RentalTransportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalTransportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalTransportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
