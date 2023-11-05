import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryVancouverComponent } from './data-recovery-vancouver.component';

describe('DataRecoveryVancouverComponent', () => {
  let component: DataRecoveryVancouverComponent;
  let fixture: ComponentFixture<DataRecoveryVancouverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryVancouverComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryVancouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
