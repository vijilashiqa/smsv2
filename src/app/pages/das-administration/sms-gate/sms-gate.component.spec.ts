import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsGateComponent } from './sms-gate.component';

describe('SmsGateComponent', () => {
  let component: SmsGateComponent;
  let fixture: ComponentFixture<SmsGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
