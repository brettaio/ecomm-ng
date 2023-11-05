import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryKelownaComponent } from './data-recovery-kelowna.component';

describe('DataRecoveryKelownaComponent', () => {
  let component: DataRecoveryKelownaComponent;
  let fixture: ComponentFixture<DataRecoveryKelownaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryKelownaComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryKelownaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
