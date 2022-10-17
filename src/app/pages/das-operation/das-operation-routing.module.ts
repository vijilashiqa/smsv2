import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobleFingureprintComponent } from './globle-fingureprint/globle-fingureprint.component';
import { GlobleStbmessagesComponent } from './globle-stbmessages/globle-stbmessages.component';
import { KillOsdComponent } from './kill-osd/kill-osd.component';


const routes: Routes = [
    {
        path: 'globlefingureprint',
        component: GlobleFingureprintComponent,
      },
      {
        path: 'globle-stbmessages',
        component: GlobleStbmessagesComponent,
      },
      {
        path: 'kill-osd',
        component: KillOsdComponent,
      },
     
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasOperationRoutingModule { }
