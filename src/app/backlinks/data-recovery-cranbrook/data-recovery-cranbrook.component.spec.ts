import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecoveryCranbrookComponent } from './data-recovery-cranbrook.component';

describe('DataRecoveryCranbrookComponent', () => {
  let component: DataRecoveryCranbrookComponent;
  let fixture: ComponentFixture<DataRecoveryCranbrookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRecoveryCranbrookComponent]
    });
    fixture = TestBed.createComponent(DataRecoveryCranbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
