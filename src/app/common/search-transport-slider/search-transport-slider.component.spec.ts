import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransportSliderComponent } from './search-transport-slider.component';

describe('SearchTransportSliderComponent', () => {
  let component: SearchTransportSliderComponent;
  let fixture: ComponentFixture<SearchTransportSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTransportSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransportSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
