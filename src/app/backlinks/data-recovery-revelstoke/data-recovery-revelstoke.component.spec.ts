import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryRevelstokeComponent } from './data-recovery-revelstoke.component';

describe('DataRecoveryRevelstokeComponent', () => {
  let component: DataRecoveryRevelstokeComponent;
  let fixture: ComponentFixture<DataRecoveryRevelstokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryRevelstokeComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryRevelstokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
