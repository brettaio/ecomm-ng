import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryLangfordComponent } from './data-recovery-langford.component';

describe('DataRecoveryLangfordComponent', () => {
  let component: DataRecoveryLangfordComponent;
  let fixture: ComponentFixture<DataRecoveryLangfordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryLangfordComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryLangfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
