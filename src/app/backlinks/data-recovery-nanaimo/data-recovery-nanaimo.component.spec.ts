import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryNanaimoComponent } from './data-recovery-nanaimo.component';

describe('DataRecoveryNanaimoComponent', () => {
  let component: DataRecoveryNanaimoComponent;
  let fixture: ComponentFixture<DataRecoveryNanaimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryNanaimoComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryNanaimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
