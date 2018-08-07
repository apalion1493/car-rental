import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackSectionComponent } from './cash-back-section.component';

describe('CashBackSectionComponent', () => {
  let component: CashBackSectionComponent;
  let fixture: ComponentFixture<CashBackSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBackSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
