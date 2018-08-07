import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCarModalComponent } from './select-car-modal.component';

describe('SelectCarModalComponent', () => {
  let component: SelectCarModalComponent;
  let fixture: ComponentFixture<SelectCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
