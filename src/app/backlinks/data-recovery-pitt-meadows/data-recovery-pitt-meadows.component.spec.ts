import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryPittMeadowsComponent } from './data-recovery-pitt-meadows.component';

describe('DataRecoveryPittMeadowsComponent', () => {
  let component: DataRecoveryPittMeadowsComponent;
  let fixture: ComponentFixture<DataRecoveryPittMeadowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryPittMeadowsComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryPittMeadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
