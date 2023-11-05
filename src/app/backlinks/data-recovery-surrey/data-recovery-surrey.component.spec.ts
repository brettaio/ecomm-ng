import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoverySurreyComponent } from './data-recovery-surrey.component';

describe('DataRecoverySurreyComponent', () => {
  let component: DataRecoverySurreyComponent;
  let fixture: ComponentFixture<DataRecoverySurreyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoverySurreyComponent]
    });
    fixture = TestBed.createComponent(DataRecoverySurreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
