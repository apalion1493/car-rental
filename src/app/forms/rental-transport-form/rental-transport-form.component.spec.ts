import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTransportFormComponent } from './rental-transport-form.component';

describe('RentalTransportFormComponent', () => {
  let component: RentalTransportFormComponent;
  let fixture: ComponentFixture<RentalTransportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalTransportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalTransportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
