import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillOsdComponent } from './kill-osd.component';

describe('KillOsdComponent', () => {
  let component: KillOsdComponent;
  let fixture: ComponentFixture<KillOsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillOsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KillOsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
