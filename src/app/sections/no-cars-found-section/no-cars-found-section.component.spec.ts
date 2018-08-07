import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCarsFoundSectionComponent } from './no-cars-found-section.component';

describe('NoCarsFoundSectionComponent', () => {
  let component: NoCarsFoundSectionComponent;
  let fixture: ComponentFixture<NoCarsFoundSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCarsFoundSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCarsFoundSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
