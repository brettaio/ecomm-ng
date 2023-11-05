import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryColwoodComponent } from './data-recovery-colwood.component';

describe('DataRecoveryColwoodComponent', () => {
  let component: DataRecoveryColwoodComponent;
  let fixture: ComponentFixture<DataRecoveryColwoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryColwoodComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryColwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
