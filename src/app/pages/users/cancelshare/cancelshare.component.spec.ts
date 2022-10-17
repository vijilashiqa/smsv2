import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelshareComponent } from './cancelshare.component';

describe('CancelshareComponent', () => {
  let component: CancelshareComponent;
  let fixture: ComponentFixture<CancelshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelshareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
