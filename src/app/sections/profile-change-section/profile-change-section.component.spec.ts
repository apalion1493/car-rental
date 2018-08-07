import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChangeSectionComponent } from './profile-change-section.component';

describe('ProfileChangeSectionComponent', () => {
  let component: ProfileChangeSectionComponent;
  let fixture: ComponentFixture<ProfileChangeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChangeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChangeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
