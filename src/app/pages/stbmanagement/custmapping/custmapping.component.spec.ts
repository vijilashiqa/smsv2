import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmappingComponent } from './custmapping.component';

describe('CustmappingComponent', () => {
  let component: CustmappingComponent;
  let fixture: ComponentFixture<CustmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
