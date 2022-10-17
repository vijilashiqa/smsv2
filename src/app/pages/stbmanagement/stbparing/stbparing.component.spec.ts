import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StbparingComponent } from './stbparing.component';

describe('StbparingComponent', () => {
  let component: StbparingComponent;
  let fixture: ComponentFixture<StbparingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StbparingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StbparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
