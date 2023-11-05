import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryCourtenayComponent } from './data-recovery-courtenay.component';

describe('DataRecoveryCourtenayComponent', () => {
  let component: DataRecoveryCourtenayComponent;
  let fixture: ComponentFixture<DataRecoveryCourtenayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryCourtenayComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryCourtenayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
