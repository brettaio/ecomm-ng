import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPortAlberniComponent } from './data-recovery-port-alberni.component';

describe('DataRecoveryPortAlberniComponent', () => {
  let component: DataRecoveryPortAlberniComponent;
  let fixture: ComponentFixture<DataRecoveryPortAlberniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPortAlberniComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPortAlberniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
