import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkpairingComponent } from './bulkpairing.component';

describe('BulkpairingComponent', () => {
  let component: BulkpairingComponent;
  let fixture: ComponentFixture<BulkpairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkpairingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkpairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
