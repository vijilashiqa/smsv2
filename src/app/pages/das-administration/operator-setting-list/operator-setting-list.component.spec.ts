import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorSettingListComponent } from './operator-setting-list.component';

describe('OperatorSettingListComponent', () => {
  let component: OperatorSettingListComponent;
  let fixture: ComponentFixture<OperatorSettingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorSettingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorSettingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
