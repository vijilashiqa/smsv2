import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsGatelistComponent } from './sms-gatelist.component';

describe('SmsGatelistComponent', () => {
  let component: SmsGatelistComponent;
  let fixture: ComponentFixture<SmsGatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsGatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsGatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
