import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustComponent } from './view-cust.component';

describe('ViewCustComponent', () => {
  let component: ViewCustComponent;
  let fixture: ComponentFixture<ViewCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
