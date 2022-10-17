import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoBranchlistComponent } from './geo-branchlist.component';

describe('GeoBranchlistComponent', () => {
  let component: GeoBranchlistComponent;
  let fixture: ComponentFixture<GeoBranchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoBranchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoBranchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
