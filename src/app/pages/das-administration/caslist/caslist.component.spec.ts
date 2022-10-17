import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaslistComponent } from './caslist.component';

describe('CaslistComponent', () => {
  let component: CaslistComponent;
  let fixture: ComponentFixture<CaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
