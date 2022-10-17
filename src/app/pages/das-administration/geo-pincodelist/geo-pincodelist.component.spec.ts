import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPincodelistComponent } from './geo-pincodelist.component';

describe('GeoPincodelistComponent', () => {
  let component: GeoPincodelistComponent;
  let fixture: ComponentFixture<GeoPincodelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoPincodelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPincodelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
