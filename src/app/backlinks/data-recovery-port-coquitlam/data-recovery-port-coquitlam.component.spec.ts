import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPortCoquitlamComponent } from './data-recovery-port-coquitlam.component';

describe('DataRecoveryPortCoquitlamComponent', () => {
  let component: DataRecoveryPortCoquitlamComponent;
  let fixture: ComponentFixture<DataRecoveryPortCoquitlamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPortCoquitlamComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPortCoquitlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
