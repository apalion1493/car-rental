import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularsTransportSectionComponent } from './populars-transport-section.component';

describe('PopularsTransportSectionComponent', () => {
  let component: PopularsTransportSectionComponent;
  let fixture: ComponentFixture<PopularsTransportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularsTransportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularsTransportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
