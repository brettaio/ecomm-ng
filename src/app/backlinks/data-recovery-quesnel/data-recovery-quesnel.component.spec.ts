import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryQuesnelComponent } from './data-recovery-quesnel.component';

describe('DataRecoveryQuesnelComponent', () => {
  let component: DataRecoveryQuesnelComponent;
  let fixture: ComponentFixture<DataRecoveryQuesnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryQuesnelComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryQuesnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
