import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryRosslandComponent } from './data-recovery-rossland.component';

describe('DataRecoveryRosslandComponent', () => {
  let component: DataRecoveryRosslandComponent;
  let fixture: ComponentFixture<DataRecoveryRosslandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryRosslandComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryRosslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
