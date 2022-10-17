import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoListlocationComponent } from './geo-listlocation.component';

describe('GeoListlocationComponent', () => {
  let component: GeoListlocationComponent;
  let fixture: ComponentFixture<GeoListlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoListlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoListlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
