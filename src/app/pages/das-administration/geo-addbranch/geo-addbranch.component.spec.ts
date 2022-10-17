import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddbranchComponent } from './geo-addbranch.component';

describe('GeoAddbranchComponent', () => {
  let component: GeoAddbranchComponent;
  let fixture: ComponentFixture<GeoAddbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
