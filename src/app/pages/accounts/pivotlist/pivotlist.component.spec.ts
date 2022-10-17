import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotlistComponent } from './pivotlist.component';

describe('PivotlistComponent', () => {
  let component: PivotlistComponent;
  let fixture: ComponentFixture<PivotlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
