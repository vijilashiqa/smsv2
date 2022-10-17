import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAdddistrictComponent } from './geo-adddistrict.component';

describe('GeoAdddistrictComponent', () => {
  let component: GeoAdddistrictComponent;
  let fixture: ComponentFixture<GeoAdddistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAdddistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAdddistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
