import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryCastlegarComponent } from './data-recovery-castlegar.component';

describe('DataRecoveryCastlegarComponent', () => {
  let component: DataRecoveryCastlegarComponent;
  let fixture: ComponentFixture<DataRecoveryCastlegarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryCastlegarComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryCastlegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
