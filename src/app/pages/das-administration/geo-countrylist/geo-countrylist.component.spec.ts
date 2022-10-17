import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCountrylistComponent } from './geo-countrylist.component';

describe('GeoCountrylistComponent', () => {
  let component: GeoCountrylistComponent;
  let fixture: ComponentFixture<GeoCountrylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoCountrylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoCountrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
