import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddlocationComponent } from './geo-addlocation.component';

describe('GeoAddlocationComponent', () => {
  let component: GeoAddlocationComponent;
  let fixture: ComponentFixture<GeoAddlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
