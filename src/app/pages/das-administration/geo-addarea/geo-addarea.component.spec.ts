import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAddareaComponent } from './geo-addarea.component';

describe('GeoAddareaComponent', () => {
  let component: GeoAddareaComponent;
  let fixture: ComponentFixture<GeoAddareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAddareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
