import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryAbbotsfordComponent } from './data-recovery-abbotsford.component';

describe('DataRecoveryAbbotsfordComponent', () => {
  let component: DataRecoveryAbbotsfordComponent;
  let fixture: ComponentFixture<DataRecoveryAbbotsfordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryAbbotsfordComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryAbbotsfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
