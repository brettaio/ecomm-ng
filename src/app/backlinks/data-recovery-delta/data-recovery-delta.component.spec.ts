import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryDeltaComponent } from './data-recovery-delta.component';

describe('DataRecoveryDeltaComponent', () => {
  let component: DataRecoveryDeltaComponent;
  let fixture: ComponentFixture<DataRecoveryDeltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryDeltaComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
