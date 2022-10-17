import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagechannelComponent } from './packagechannel.component';

describe('PackagechannelComponent', () => {
  let component: PackagechannelComponent;
  let fixture: ComponentFixture<PackagechannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagechannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagechannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
