import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstockComponent } from './editstock.component';

describe('EditstockComponent', () => {
  let component: EditstockComponent;
  let fixture: ComponentFixture<EditstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
