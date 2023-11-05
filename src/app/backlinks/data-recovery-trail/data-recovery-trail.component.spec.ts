import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryTrailComponent } from './data-recovery-trail.component';

describe('DataRecoveryTrailComponent', () => {
  let component: DataRecoveryTrailComponent;
  let fixture: ComponentFixture<DataRecoveryTrailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryTrailComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
