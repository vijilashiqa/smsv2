import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepositComponent } from './adddeposit.component';

describe('AdddepositComponent', () => {
  let component: AdddepositComponent;
  let fixture: ComponentFixture<AdddepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
