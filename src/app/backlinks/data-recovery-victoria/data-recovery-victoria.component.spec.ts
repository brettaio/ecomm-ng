import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryVictoriaComponent } from './data-recovery-victoria.component';

describe('DataRecoveryVictoriaComponent', () => {
  let component: DataRecoveryVictoriaComponent;
  let fixture: ComponentFixture<DataRecoveryVictoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryVictoriaComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryVictoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
