import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryRichmondComponent } from './data-recovery-richmond.component';

describe('DataRecoveryRichmondComponent', () => {
  let component: DataRecoveryRichmondComponent;
  let fixture: ComponentFixture<DataRecoveryRichmondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryRichmondComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryRichmondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
