import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryWestKelownaComponent } from './data-recovery-west-kelowna.component';

describe('DataRecoveryWestKelownaComponent', () => {
  let component: DataRecoveryWestKelownaComponent;
  let fixture: ComponentFixture<DataRecoveryWestKelownaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryWestKelownaComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryWestKelownaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
