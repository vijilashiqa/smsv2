import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StbterminalComponent } from './stbterminal.component';

describe('StbterminalComponent', () => {
  let component: StbterminalComponent;
  let fixture: ComponentFixture<StbterminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StbterminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StbterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
