import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadendeditComponent } from './headendedit.component';

describe('HeadendeditComponent', () => {
  let component: HeadendeditComponent;
  let fixture: ComponentFixture<HeadendeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadendeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadendeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
