import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryMerrittComponent } from './data-recovery-merritt.component';

describe('DataRecoveryMerrittComponent', () => {
  let component: DataRecoveryMerrittComponent;
  let fixture: ComponentFixture<DataRecoveryMerrittComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryMerrittComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryMerrittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
