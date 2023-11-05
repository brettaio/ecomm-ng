import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryNelsonComponent } from './data-recovery-nelson.component';

describe('DataRecoveryNelsonComponent', () => {
  let component: DataRecoveryNelsonComponent;
  let fixture: ComponentFixture<DataRecoveryNelsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryNelsonComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryNelsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
