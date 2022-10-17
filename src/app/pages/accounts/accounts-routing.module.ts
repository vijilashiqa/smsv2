import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepositComponent } from './adddeposit/adddeposit.component';
import { DepositlistComponent } from './depositlist/depositlist.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { PivotlistComponent } from './pivotlist/pivotlist.component';
import { WalletlistComponent } from './walletlist/walletlist.component';
import { WalletshareComponent } from './walletshare/walletshare.component';

const routes: Routes = [
  {
    path:'depositlist',
    component: DepositlistComponent,
  },
  {
    path:'adddeposit',
    component: AdddepositComponent,
  },
  {
    path:'invoicelist',
    component: InvoicelistComponent,
  },
  {
    path:'walletshare',
    component: WalletshareComponent,
  },
  {
    path:'walletlist',
    component: WalletlistComponent,
  },
  {
    path:'pivotlist',
    component: PivotlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
