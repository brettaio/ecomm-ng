import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryVernonComponent } from './data-recovery-vernon.component';

describe('DataRecoveryVernonComponent', () => {
  let component: DataRecoveryVernonComponent;
  let fixture: ComponentFixture<DataRecoveryVernonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryVernonComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryVernonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
