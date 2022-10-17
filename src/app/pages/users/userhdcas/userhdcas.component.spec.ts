import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhdcasComponent } from './userhdcas.component';

describe('UserhdcasComponent', () => {
  let component: UserhdcasComponent;
  let fixture: ComponentFixture<UserhdcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhdcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhdcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
