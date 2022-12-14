import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewCustComponent } from './renew-cust.component';

describe('RenewCustComponent', () => {
  let component: RenewCustComponent;
  let fixture: ComponentFixture<RenewCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
