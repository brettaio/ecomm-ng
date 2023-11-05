import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryCoquitlamComponent } from './data-recovery-coquitlam.component';

describe('DataRecoveryCoquitlamComponent', () => {
  let component: DataRecoveryCoquitlamComponent;
  let fixture: ComponentFixture<DataRecoveryCoquitlamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryCoquitlamComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryCoquitlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
