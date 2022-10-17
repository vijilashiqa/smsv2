import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstbComponent } from './addstb/addstb.component';
import { BulkactivationComponent } from './bulkactivation/bulkactivation.component';
import { BulkpairingComponent } from './bulkpairing/bulkpairing.component';
import { BulkserviceactivationComponent } from './bulkserviceactivation/bulkserviceactivation.component';
import { BulkvcactiveComponent } from './bulkvcactive/bulkvcactive.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CustmappingComponent } from './custmapping/custmapping.component';
import { FaultstbComponent } from './faultstb/faultstb.component';
import { StbactdeactComponent } from './stbactdeact/stbactdeact.component';
import { StblistComponent } from './stblist/stblist.component';
import { StbparingComponent } from './stbparing/stbparing.component';
import { StbterminalComponent } from './stbterminal/stbterminal.component';
import { UploadcardComponent } from './uploadcard/uploadcard.component';

const routes: Routes = [
  {
    path:'stblist',
    component: StblistComponent,
  },
  {
    path:'addstb',
    component: AddstbComponent,
  },
  {
    path:'cardlist',
    component: CardlistComponent,
  },
  {
    path:'uploadcard',
    component: UploadcardComponent,
  },
  {
    path:'custmapping',
    component: CustmappingComponent,
  },
  {
    path:'bulkvcactive',
    component: BulkvcactiveComponent,
  },
  {
    path:'bulkpairing',
    component: BulkpairingComponent,
  },
  {
    path:'stbterminal',
    component: StbterminalComponent,
  },
  {
    path:'bulkactivation',
    component: BulkactivationComponent,
  },
  {
    path:'bulkserviceactivation',
    component: BulkserviceactivationComponent,
  },
  {
    path:'faultstb',
    component: FaultstbComponent,
  },
  {
    path:'stbactdeact',
    component: StbactdeactComponent,
  },
  
{
  path :'stbparing',
  component :StbparingComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StbmanagementRoutingModule { }
