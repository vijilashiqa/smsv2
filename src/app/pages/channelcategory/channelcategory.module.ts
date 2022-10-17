import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelcategoryRoutingModule } from './channelcategory-routing.module';
import { listgenreComponent } from './listgenre/listgenre.component';
import { ListlanguageComponent } from './listlanguage/listlanguage.component';
import { listChannelsComponent } from './listchannel/listchannels.component';
import { AddchannelsComponent } from './addchannels/addchannels.component';
import { ListchannelsrvComponent } from './listchannelsrv/listchannelsrv.component';
import { AddchannelsrvComponent } from './addchannelsrv/addchannelsrv.component';
import { BroadcasterListComponent } from './broadcaster-list/broadcaster-list.component';
import { AddbroadcasterComponent } from './addbroadcaster/addbroadcaster.component';
import { PackagelistComponent } from './packagelist/packagelist.component';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { AddpackageshareComponent } from './addpackageshare/addpackageshare.component';
import { PackagesharelistComponent } from './packagesharelist/packagesharelist.component';
import { ListpackprodComponent } from './listpackprod/listpackprod.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRadioModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { AddlangComponent } from './addlang/addlang.component';
import { PagerService } from '../_services';
import { AddgenreComponent } from './addgenre/addgenre.component';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { TreeModule } from 'angular-tree-component';
import { PackagechannelComponent } from './packagechannel/packagechannel.component';
import { EditpackageComponent } from './editpackage/editpackage.component';
import { filterModule } from '../filter/filter-module';

@NgModule({
  declarations: [
    listgenreComponent,
    ListlanguageComponent,
    listChannelsComponent,
    AddchannelsComponent,
    ListchannelsrvComponent,
    AddchannelsrvComponent,
    BroadcasterListComponent,
    AddbroadcasterComponent,
    PackagelistComponent,
    AddpackageComponent,
    AddpackageshareComponent,
    PackagesharelistComponent,
    ListpackprodComponent,
    AddlangComponent,
    AddgenreComponent,
    PackagechannelComponent,
    EditpackageComponent
  ],
  imports: [
    CommonModule,
    ChannelcategoryRoutingModule,
    CommonModule,
    AutoCompleteNModule,
    ReactiveFormsModule,
    ThemeModule,
    NbRadioModule,
    NbCardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NbStepperModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    filterModule,
    LayoutRoutingModule,NbTreeGridModule,
    TreeModule.forRoot(),
    FormsModule
  
  ],
  providers: [
    
  PagerService 
  ],
})
export class ChannelcategoryModule { }
