import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryFortStJohnComponent } from './data-recovery-fort-st-john.component';

describe('DataRecoveryFortStJohnComponent', () => {
  let component: DataRecoveryFortStJohnComponent;
  let fixture: ComponentFixture<DataRecoveryFortStJohnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryFortStJohnComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryFortStJohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
