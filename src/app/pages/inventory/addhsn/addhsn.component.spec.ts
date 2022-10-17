import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhsnComponent } from './addhsn.component';

describe('AddhsnComponent', () => {
  let component: AddhsnComponent;
  let fixture: ComponentFixture<AddhsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
