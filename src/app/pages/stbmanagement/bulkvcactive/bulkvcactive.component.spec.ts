import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkvcactiveComponent } from './bulkvcactive.component';

describe('BulkvcactiveComponent', () => {
  let component: BulkvcactiveComponent;
  let fixture: ComponentFixture<BulkvcactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkvcactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkvcactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
