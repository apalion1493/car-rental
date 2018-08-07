import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModalFormComponent } from './car-modal-form.component';

describe('CarModalFormComponent', () => {
  let component: CarModalFormComponent;
  let fixture: ComponentFixture<CarModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
