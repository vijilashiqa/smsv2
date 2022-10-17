import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadendaddComponent } from './headendadd.component';

describe('HeadendaddComponent', () => {
  let component: HeadendaddComponent;
  let fixture: ComponentFixture<HeadendaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadendaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadendaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
