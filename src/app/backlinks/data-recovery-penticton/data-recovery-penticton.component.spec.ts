import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPentictonComponent } from './data-recovery-penticton.component';

describe('DataRecoveryPentictonComponent', () => {
  let component: DataRecoveryPentictonComponent;
  let fixture: ComponentFixture<DataRecoveryPentictonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPentictonComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPentictonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
