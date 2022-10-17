import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addvendordetailsComponent } from './Addvendordetails/addvendordetails.component';
import { AddstockComponent } from './addstock/addstock.component';
import { vendordetailslistComponent } from './vendordetailslist/vendordetailslist.component';
import { BusinesslistdetailsComponent } from './businesslistdetails/businesslistdetails.component';
import { FaultstbComponent } from './faultstb/faultstb.component';
import { HsnlistComponent } from './hsnlist/hsnlist.component';
import { ListstockComponent } from './liststock/liststock.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { ModellistComponent } from './modellist/modellist.component';
import { StblistComponent } from './stblist/stblist.component';
import { EditstockComponent } from './editstock/editstock.component';

const routes: Routes = [
  {
    path: 'vendorlist',
    component: VendorlistComponent,
  },
  {
    path: 'stblist',
    component: StblistComponent,
  },
  {
    path: 'modellist',
    component: ModellistComponent,
  },
  {
    path: 'Vendordetailslist',
    component: vendordetailslistComponent,
  },
  {
    path: 'businesslistdetails',
    component: BusinesslistdetailsComponent,
  },
  {

path :'editstock'    ,
component :EditstockComponent
  },
  {
    path: 'addvendordetails',
    component: addvendordetailsComponent,
  },
  {
    path: 'hsnlist',
    component: HsnlistComponent,
  },
  {
    path: 'liststock',
    component: ListstockComponent,
  },
  {
    path: 'addstock',
    component: AddstockComponent,
  },
  {
    path: 'faultstb',
    component:  FaultstbComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
