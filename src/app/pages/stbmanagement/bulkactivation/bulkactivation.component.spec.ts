import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkactivationComponent } from './bulkactivation.component';

describe('BulkactivationComponent', () => {
  let component: BulkactivationComponent;
  let fixture: ComponentFixture<BulkactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkactivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
