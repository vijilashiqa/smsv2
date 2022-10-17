import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddcityComponent } from './geo-addcity.component';

describe('GeoAddcityComponent', () => {
  let component: GeoAddcityComponent;
  let fixture: ComponentFixture<GeoAddcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
