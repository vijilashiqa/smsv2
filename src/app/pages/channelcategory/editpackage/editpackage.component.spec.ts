import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpackageComponent } from './editpackage.component';

describe('EditpackageComponent', () => {
  let component: EditpackageComponent;
  let fixture: ComponentFixture<EditpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
