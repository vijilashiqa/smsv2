import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddpincodeComponent } from './geo-addpincode.component';

describe('GeoAddpincodeComponent', () => {
  let component: GeoAddpincodeComponent;
  let fixture: ComponentFixture<GeoAddpincodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddpincodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddpincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
