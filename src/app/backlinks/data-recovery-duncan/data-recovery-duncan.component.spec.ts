import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryDuncanComponent } from './data-recovery-duncan.component';

describe('DataRecoveryDuncanComponent', () => {
  let component: DataRecoveryDuncanComponent;
  let fixture: ComponentFixture<DataRecoveryDuncanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryDuncanComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryDuncanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
