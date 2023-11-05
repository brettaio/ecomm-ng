import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoverySalmonArmComponent } from './data-recovery-salmon-arm.component';

describe('DataRecoverySalmonArmComponent', () => {
  let component: DataRecoverySalmonArmComponent;
  let fixture: ComponentFixture<DataRecoverySalmonArmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoverySalmonArmComponent]
    });
    fixture = TestBed.createComponent(DataRecoverySalmonArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
