import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryKimberleyComponent } from './data-recovery-kimberley.component';

describe('DataRecoveryKimberleyComponent', () => {
  let component: DataRecoveryKimberleyComponent;
  let fixture: ComponentFixture<DataRecoveryKimberleyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryKimberleyComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryKimberleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
