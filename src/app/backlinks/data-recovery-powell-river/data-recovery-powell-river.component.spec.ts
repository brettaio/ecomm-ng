import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPowellRiverComponent } from './data-recovery-powell-river.component';

describe('DataRecoveryPowellRiverComponent', () => {
  let component: DataRecoveryPowellRiverComponent;
  let fixture: ComponentFixture<DataRecoveryPowellRiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPowellRiverComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPowellRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
