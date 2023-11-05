import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryArmstrongComponent } from './data-recovery-armstrong.component';

describe('DataRecoveryArmstrongComponent', () => {
  let component: DataRecoveryArmstrongComponent;
  let fixture: ComponentFixture<DataRecoveryArmstrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryArmstrongComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryArmstrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
