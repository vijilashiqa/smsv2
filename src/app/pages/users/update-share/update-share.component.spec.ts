import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShareComponent } from './update-share.component';

describe('UpdateShareComponent', () => {
  let component: UpdateShareComponent;
  let fixture: ComponentFixture<UpdateShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
