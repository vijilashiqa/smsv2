import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoArealistComponent } from './geo-arealist.component';

describe('GeoArealistComponent', () => {
  let component: GeoArealistComponent;
  let fixture: ComponentFixture<GeoArealistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoArealistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoArealistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
