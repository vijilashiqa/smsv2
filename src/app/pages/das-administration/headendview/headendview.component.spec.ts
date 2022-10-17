import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadendviewComponent } from './headendview.component';

describe('HeadendviewComponent', () => {
  let component: HeadendviewComponent;
  let fixture: ComponentFixture<HeadendviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadendviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadendviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
