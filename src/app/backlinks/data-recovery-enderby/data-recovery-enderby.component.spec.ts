import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryEnderbyComponent } from './data-recovery-enderby.component';

describe('DataRecoveryEnderbyComponent', () => {
  let component: DataRecoveryEnderbyComponent;
  let fixture: ComponentFixture<DataRecoveryEnderbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryEnderbyComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryEnderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
