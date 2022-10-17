import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustComponent } from './add-cust/add-cust.component';
import { CustListComponent } from './cust-list/cust-list.component';
import { CustTransferComponent } from './cust-transfer/cust-transfer.component';
import { SurenderStbComponent } from './surender-stb/surender-stb.component';

const routes: Routes = [
  
  {
    path: 'cust-list',
    component: CustListComponent,
    
  },
  
  {
    path: 'add-cust',
    component: AddCustComponent,
    
  },
  
  {
    path: 'cust-transfer',
    component: CustTransferComponent,
    
  },
  
  {
    path: 'surender-stb',
    component: SurenderStbComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomerRoutingModule { }
