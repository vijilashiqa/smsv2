import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadendlistComponent } from './headendlist.component';

describe('HeadendlistComponent', () => {
  let component: HeadendlistComponent;
  let fixture: ComponentFixture<HeadendlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadendlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
