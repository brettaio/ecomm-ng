import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryWilliamsLakeComponent } from './data-recovery-williams-lake.component';

describe('DataRecoveryWilliamsLakeComponent', () => {
  let component: DataRecoveryWilliamsLakeComponent;
  let fixture: ComponentFixture<DataRecoveryWilliamsLakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryWilliamsLakeComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryWilliamsLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
