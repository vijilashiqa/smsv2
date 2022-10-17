import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddstateComponent } from './geo-addstate.component';

describe('GeoAddstateComponent', () => {
  let component: GeoAddstateComponent;
  let fixture: ComponentFixture<GeoAddstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
