import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleFingureprintComponent } from './globle-fingureprint.component';

describe('GlobleFingureprintComponent', () => {
  let component: GlobleFingureprintComponent;
  let fixture: ComponentFixture<GlobleFingureprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleFingureprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleFingureprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
