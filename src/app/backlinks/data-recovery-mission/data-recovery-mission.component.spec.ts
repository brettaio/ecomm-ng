import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryMissionComponent } from './data-recovery-mission.component';

describe('DataRecoveryMissionComponent', () => {
  let component: DataRecoveryMissionComponent;
  let fixture: ComponentFixture<DataRecoveryMissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryMissionComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
