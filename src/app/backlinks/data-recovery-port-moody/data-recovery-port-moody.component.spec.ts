import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPortMoodyComponent } from './data-recovery-port-moody.component';

describe('DataRecoveryPortMoodyComponent', () => {
  let component: DataRecoveryPortMoodyComponent;
  let fixture: ComponentFixture<DataRecoveryPortMoodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPortMoodyComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPortMoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
