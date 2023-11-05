import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryGreenwoodComponent } from './data-recovery-greenwood.component';

describe('DataRecoveryGreenwoodComponent', () => {
  let component: DataRecoveryGreenwoodComponent;
  let fixture: ComponentFixture<DataRecoveryGreenwoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryGreenwoodComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryGreenwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
