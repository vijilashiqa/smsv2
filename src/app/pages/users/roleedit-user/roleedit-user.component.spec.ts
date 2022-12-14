import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleeditUserComponent } from './roleedit-user.component';

describe('RoleeditUserComponent', () => {
  let component: RoleeditUserComponent;
  let fixture: ComponentFixture<RoleeditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleeditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleeditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
