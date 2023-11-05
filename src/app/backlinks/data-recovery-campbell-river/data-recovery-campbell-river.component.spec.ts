import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryCampbellRiverComponent } from './data-recovery-campbell-river.component';

describe('DataRecoveryCampbellRiverComponent', () => {
  let component: DataRecoveryCampbellRiverComponent;
  let fixture: ComponentFixture<DataRecoveryCampbellRiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryCampbellRiverComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryCampbellRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
