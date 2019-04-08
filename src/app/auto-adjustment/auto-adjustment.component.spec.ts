import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAdjustmentComponent } from './auto-adjustment.component';

describe('AutoAdjustmentComponent', () => {
  let component: AutoAdjustmentComponent;
  let fixture: ComponentFixture<AutoAdjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoAdjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
