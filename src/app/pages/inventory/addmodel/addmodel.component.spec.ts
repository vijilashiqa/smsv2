import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodelComponent } from './addmodel.component';

describe('AddmodelComponent', () => {
  let component: AddmodelComponent;
  let fixture: ComponentFixture<AddmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
