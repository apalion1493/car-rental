import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransportSectionComponent } from './search-transport-section.component';

describe('SearchTransportSectionComponent', () => {
  let component: SearchTransportSectionComponent;
  let fixture: ComponentFixture<SearchTransportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTransportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
