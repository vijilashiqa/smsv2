import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StbactdeactComponent } from './stbactdeact.component';

describe('StbactdeactComponent', () => {
  let component: StbactdeactComponent;
  let fixture: ComponentFixture<StbactdeactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StbactdeactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StbactdeactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
