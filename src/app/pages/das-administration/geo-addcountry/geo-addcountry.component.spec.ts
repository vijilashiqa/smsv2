import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddcountryComponent } from './geo-addcountry.component';

describe('GeoAddcountryComponent', () => {
  let component: GeoAddcountryComponent;
  let fixture: ComponentFixture<GeoAddcountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddcountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
