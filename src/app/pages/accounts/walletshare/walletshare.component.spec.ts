import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletshareComponent } from './walletshare.component';

describe('WalletshareComponent', () => {
  let component: WalletshareComponent;
  let fixture: ComponentFixture<WalletshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletshareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
