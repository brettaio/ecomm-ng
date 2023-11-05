import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryParksvilleComponent } from './data-recovery-parksville.component';

describe('DataRecoveryParksvilleComponent', () => {
  let component: DataRecoveryParksvilleComponent;
  let fixture: ComponentFixture<DataRecoveryParksvilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryParksvilleComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryParksvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
