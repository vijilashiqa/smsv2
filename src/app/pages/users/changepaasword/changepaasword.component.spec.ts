import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepaaswordComponent } from './changepaasword.component';

describe('ChangepaaswordComponent', () => {
  let component: ChangepaaswordComponent;
  let fixture: ComponentFixture<ChangepaaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepaaswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepaaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
