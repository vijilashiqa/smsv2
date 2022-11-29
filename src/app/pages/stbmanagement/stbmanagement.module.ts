import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StbmanagementRoutingModule } from './stbmanagement-routing.module';
import { StblistComponent } from './stblist/stblist.component';
import { AddstbComponent } from './addstb/addstb.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { UploadcardComponent } from './uploadcard/uploadcard.component';
import { CustmappingComponent } from './custmapping/custmapping.component';
import { BulkvcactiveComponent } from './bulkvcactive/bulkvcactive.component';
import { BulkpairingComponent } from './bulkpairing/bulkpairing.component';
import { StbterminalComponent } from './stbterminal/stbterminal.component';
import { BulkactivationComponent } from './bulkactivation/bulkactivation.component';
import { BulkserviceactivationComponent } from './bulkserviceactivation/bulkserviceactivation.component';
import { FaultstbComponent } from './faultstb/faultstb.component';
import { StbactdeactComponent } from './stbactdeact/stbactdeact.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerService } from '../_services/index';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { StbparingComponent } from './stbparing/stbparing.component';

@NgModule({
  declarations: [
    StblistComponent,
    AddstbComponent,
    CardlistComponent,
    UploadcardComponent,
    CustmappingComponent,
    BulkvcactiveComponent,
    BulkpairingComponent,
    StbterminalComponent,
    BulkactivationComponent,
    BulkserviceactivationComponent,
    FaultstbComponent,
    StbactdeactComponent,
    StbparingComponent
  ],
  imports: [
    CommonModule,
    StbmanagementRoutingModule,
    NbCardModule,
    NbTabsetModule,
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
    LayoutRoutingModule,NbTreeGridModule,
    ReactiveFormsModule,
    ThemeModule,
    FormsModule,
    AutoCompleteNModule,
    AutocompleteLibModule,
  ],


  providers: [
    
    PagerService ,
  ],
})
export class StbmanagementModule { }
