import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultstbComponent } from './faultstb.component';

describe('FaultstbComponent', () => {
  let component: FaultstbComponent;
  let fixture: ComponentFixture<FaultstbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultstbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultstbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
