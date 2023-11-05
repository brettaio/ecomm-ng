import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryNewWestminsterComponent } from './data-recovery-new-westminster.component';

describe('DataRecoveryNewWestminsterComponent', () => {
  let component: DataRecoveryNewWestminsterComponent;
  let fixture: ComponentFixture<DataRecoveryNewWestminsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryNewWestminsterComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryNewWestminsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
