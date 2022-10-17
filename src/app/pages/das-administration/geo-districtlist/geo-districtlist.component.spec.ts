import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoDistrictlistComponent } from './geo-districtlist.component';

describe('GeoDistrictlistComponent', () => {
  let component: GeoDistrictlistComponent;
  let fixture: ComponentFixture<GeoDistrictlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoDistrictlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDistrictlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
