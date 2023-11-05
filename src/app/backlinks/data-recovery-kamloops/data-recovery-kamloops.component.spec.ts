import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryKamloopsComponent } from './data-recovery-kamloops.component';

describe('DataRecoveryKamloopsComponent', () => {
  let component: DataRecoveryKamloopsComponent;
  let fixture: ComponentFixture<DataRecoveryKamloopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryKamloopsComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryKamloopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
