import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryBurnabyComponent } from './data-recovery-burnaby.component';

describe('DataRecoveryBurnabyComponent', () => {
  let component: DataRecoveryBurnabyComponent;
  let fixture: ComponentFixture<DataRecoveryBurnabyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryBurnabyComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryBurnabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
