import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCreditslistComponent } from './sms-creditslist.component';

describe('SmsCreditslistComponent', () => {
  let component: SmsCreditslistComponent;
  let fixture: ComponentFixture<SmsCreditslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCreditslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCreditslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
