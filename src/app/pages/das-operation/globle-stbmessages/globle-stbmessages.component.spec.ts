import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleStbmessagesComponent } from './globle-stbmessages.component';

describe('GlobleStbmessagesComponent', () => {
  let component: GlobleStbmessagesComponent;
  let fixture: ComponentFixture<GlobleStbmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleStbmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleStbmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
