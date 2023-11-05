import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryTerraceComponent } from './data-recovery-terrace.component';

describe('DataRecoveryTerraceComponent', () => {
  let component: DataRecoveryTerraceComponent;
  let fixture: ComponentFixture<DataRecoveryTerraceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryTerraceComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryTerraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
