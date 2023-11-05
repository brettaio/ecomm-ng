import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryChilliwackComponent } from './data-recovery-chilliwack.component';

describe('DataRecoveryChilliwackComponent', () => {
  let component: DataRecoveryChilliwackComponent;
  let fixture: ComponentFixture<DataRecoveryChilliwackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryChilliwackComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryChilliwackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
