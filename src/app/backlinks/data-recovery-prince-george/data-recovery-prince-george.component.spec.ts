import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPrinceGeorgeComponent } from './data-recovery-prince-george.component';

describe('DataRecoveryPrinceGeorgeComponent', () => {
  let component: DataRecoveryPrinceGeorgeComponent;
  let fixture: ComponentFixture<DataRecoveryPrinceGeorgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPrinceGeorgeComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPrinceGeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
