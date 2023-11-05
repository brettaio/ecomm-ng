import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryMapleRidgeComponent } from './data-recovery-maple-ridge.component';

describe('DataRecoveryMapleRidgeComponent', () => {
  let component: DataRecoveryMapleRidgeComponent;
  let fixture: ComponentFixture<DataRecoveryMapleRidgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryMapleRidgeComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryMapleRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
