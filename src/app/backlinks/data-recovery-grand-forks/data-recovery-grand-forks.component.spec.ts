import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryGrandForksComponent } from './data-recovery-grand-forks.component';

describe('DataRecoveryGrandForksComponent', () => {
  let component: DataRecoveryGrandForksComponent;
  let fixture: ComponentFixture<DataRecoveryGrandForksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryGrandForksComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryGrandForksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
