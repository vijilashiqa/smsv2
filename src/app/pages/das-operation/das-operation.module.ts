import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobleStbmessagesComponent } from './globle-stbmessages/globle-stbmessages.component';
import { KillOsdComponent } from './kill-osd/kill-osd.component';
import { DasOperationRoutingModule } from './das-operation-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobleFingureprintComponent } from './globle-fingureprint/globle-fingureprint.component';
import { ThemeModule } from '../../@theme/theme.module';
import {NbCardModule} from '@nebular/theme';



@NgModule({
  declarations: [
    GlobleFingureprintComponent,
    GlobleStbmessagesComponent,
    KillOsdComponent
  ],
  imports: [
    CommonModule,
    DasOperationRoutingModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    
  ]
})
export class DASOperationModule { }
