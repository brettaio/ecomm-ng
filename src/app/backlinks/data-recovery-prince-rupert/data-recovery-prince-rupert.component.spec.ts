import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPrinceRupertComponent } from './data-recovery-prince-rupert.component';

describe('DataRecoveryPrinceRupertComponent', () => {
  let component: DataRecoveryPrinceRupertComponent;
  let fixture: ComponentFixture<DataRecoveryPrinceRupertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPrinceRupertComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPrinceRupertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
