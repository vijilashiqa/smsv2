import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstbtypeComponent } from './addstbtype.component';

describe('AddstbtypeComponent', () => {
  let component: AddstbtypeComponent;
  let fixture: ComponentFixture<AddstbtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstbtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstbtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
