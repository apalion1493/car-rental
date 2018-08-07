import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsSliderComponent } from './destinations-slider.component';

describe('DestinationsSliderComponent', () => {
  let component: DestinationsSliderComponent;
  let fixture: ComponentFixture<DestinationsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
