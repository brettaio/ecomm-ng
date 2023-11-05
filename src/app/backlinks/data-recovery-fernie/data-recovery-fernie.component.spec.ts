import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryFernieComponent } from './data-recovery-fernie.component';

describe('DataRecoveryFernieComponent', () => {
  let component: DataRecoveryFernieComponent;
  let fixture: ComponentFixture<DataRecoveryFernieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryFernieComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryFernieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
