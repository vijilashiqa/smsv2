import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbroadcasterComponent } from './addbroadcaster/addbroadcaster.component';
import { AddchannelsComponent } from './addchannels/addchannels.component';
import { AddchannelsrvComponent } from './addchannelsrv/addchannelsrv.component';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { AddpackageshareComponent } from './addpackageshare/addpackageshare.component';
import { BroadcasterListComponent } from './broadcaster-list/broadcaster-list.component';
import { listChannelsComponent } from './listchannel/listchannels.component';
import { ListlanguageComponent } from './listlanguage/listlanguage.component';
import { ListchannelsrvComponent } from './listchannelsrv/listchannelsrv.component';
import { listgenreComponent } from './listgenre/listgenre.component';
import { ListpackprodComponent } from './listpackprod/listpackprod.component';
import { PackagelistComponent } from './packagelist/packagelist.component';
import { PackagesharelistComponent } from './packagesharelist/packagesharelist.component';
import { EditpackageComponent } from './editpackage/editpackage.component';

const routes: Routes = [
  
  {
    path: 'listgenre',
    component: listgenreComponent,
    
  },
  {
    path: 'listlanguage',
    component: ListlanguageComponent,
    
  },
  {
    path: 'listchannel',
    component: listChannelsComponent,
    
  },
  {
    path: 'addchannels',
    component: AddchannelsComponent,
    
  },
  {
    path: 'listchannelsrv',
    component: ListchannelsrvComponent,
    
  },
  {
    path: 'addchannelsrv',
    component: AddchannelsrvComponent,
    
  },
  {
    path: 'broadcaster-list',
    component: BroadcasterListComponent,
    
  },
  {
    path: 'addbroadcaster',
    component:  AddbroadcasterComponent,
    
  },
  {
    path: 'packagelist',
    component: PackagelistComponent,
    
  },
  
  {
    path: 'addpackage',
    component: AddpackageComponent,
    
  },


  {
    path :'editpackage',
    component:EditpackageComponent
  },
  {
    path: 'addpackageshare',
    component: AddpackageshareComponent,
    
  },
  {
    path: 'packagesharelist',
    component:PackagesharelistComponent,
    
  },
  {
    path: 'listpackprod',
    component:ListpackprodComponent,
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelcategoryRoutingModule { }
