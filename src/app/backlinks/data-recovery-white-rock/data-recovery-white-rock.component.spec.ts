import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryWhiteRockComponent } from './data-recovery-white-rock.component';

describe('DataRecoveryWhiteRockComponent', () => {
  let component: DataRecoveryWhiteRockComponent;
  let fixture: ComponentFixture<DataRecoveryWhiteRockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryWhiteRockComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryWhiteRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
