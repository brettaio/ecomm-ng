import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryLangleyComponent } from './data-recovery-langley.component';

describe('DataRecoveryLangleyComponent', () => {
  let component: DataRecoveryLangleyComponent;
  let fixture: ComponentFixture<DataRecoveryLangleyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryLangleyComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryLangleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
