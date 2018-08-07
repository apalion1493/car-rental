import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularDestinationsSectionComponent } from './most-popular-destinations-section.component';

describe('MostPopularDestinationsSectionComponent', () => {
  let component: MostPopularDestinationsSectionComponent;
  let fixture: ComponentFixture<MostPopularDestinationsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularDestinationsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularDestinationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
