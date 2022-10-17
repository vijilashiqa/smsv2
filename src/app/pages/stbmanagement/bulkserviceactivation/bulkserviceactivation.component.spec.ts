import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkserviceactivationComponent } from './bulkserviceactivation.component';

describe('BulkserviceactivationComponent', () => {
  let component: BulkserviceactivationComponent;
  let fixture: ComponentFixture<BulkserviceactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkserviceactivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkserviceactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
