import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcasComponent } from './addcas.component';

describe('AddcasComponent', () => {
  let component: AddcasComponent;
  let fixture: ComponentFixture<AddcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
