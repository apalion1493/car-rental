import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceOfTransportTabsComponent } from './choice-of-transport-tabs.component';

describe('ChoiceOfTransportTabsComponent', () => {
  let component: ChoiceOfTransportTabsComponent;
  let fixture: ComponentFixture<ChoiceOfTransportTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceOfTransportTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceOfTransportTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
