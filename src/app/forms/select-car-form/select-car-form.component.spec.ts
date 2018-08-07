import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCarFormComponent } from './select-car-form.component';

describe('SelectCarFormComponent', () => {
  let component: SelectCarFormComponent;
  let fixture: ComponentFixture<SelectCarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
