import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryNorthVancouverComponent } from './data-recovery-north-vancouver.component';

describe('DataRecoveryNorthVancouverComponent', () => {
  let component: DataRecoveryNorthVancouverComponent;
  let fixture: ComponentFixture<DataRecoveryNorthVancouverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryNorthVancouverComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryNorthVancouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
