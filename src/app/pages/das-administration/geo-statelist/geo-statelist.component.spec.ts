import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoStatelistComponent } from './geo-statelist.component';

describe('GeoStatelistComponent', () => {
  let component: GeoStatelistComponent;
  let fixture: ComponentFixture<GeoStatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoStatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoStatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
