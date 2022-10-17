import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletlistComponent } from './walletlist.component';

describe('WalletlistComponent', () => {
  let component: WalletlistComponent;
  let fixture: ComponentFixture<WalletlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
