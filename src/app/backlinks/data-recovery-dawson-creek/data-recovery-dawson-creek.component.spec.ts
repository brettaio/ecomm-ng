import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryDawsonCreekComponent } from './data-recovery-dawson-creek.component';

describe('DataRecoveryDawsonCreekComponent', () => {
  let component: DataRecoveryDawsonCreekComponent;
  let fixture: ComponentFixture<DataRecoveryDawsonCreekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryDawsonCreekComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryDawsonCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
