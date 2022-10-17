import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCitylistComponent } from './geo-citylist.component';

describe('GeoCitylistComponent', () => {
  let component: GeoCitylistComponent;
  let fixture: ComponentFixture<GeoCitylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoCitylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoCitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
