import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseOfTransportTabsComponent } from './choise-of-transport-tabs.component';

describe('ChoiseOfTransportTabsComponent', () => {
  let component: ChoiseOfTransportTabsComponent;
  let fixture: ComponentFixture<ChoiseOfTransportTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiseOfTransportTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiseOfTransportTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
