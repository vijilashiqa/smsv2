import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustComponent } from './edit-cust.component';

describe('EditCustComponent', () => {
  let component: EditCustComponent;
  let fixture: ComponentFixture<EditCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
