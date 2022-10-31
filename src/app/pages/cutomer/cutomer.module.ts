import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';

import { CutomerRoutingModule } from './cutomer-routing.module';
import { AddCustComponent } from './add-cust/add-cust.component';
import { CustListComponent } from './cust-list/cust-list.component';
import { CustTransferComponent } from './cust-transfer/cust-transfer.component';
import { SurenderStbComponent } from './surender-stb/surender-stb.component';
import { UsersRoutingModule } from '../users/users-routing.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { PagerService } from '../_services/index';
@NgModule({
  declarations: [
    AddCustComponent,
    CustListComponent,
    CustTransferComponent,
    SurenderStbComponent
  ],
  imports: [
    CommonModule,
    CutomerRoutingModule,
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NbTabsetModule,
    FormsModule,
    NbCardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NbStepperModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule, NbTreeGridModule,
    ReactiveFormsModule,
    ThemeModule,
    AutoCompleteNModule,
    AutocompleteLibModule
  ],


  providers: [

    PagerService,
  ],
})
export class CutomerModule { }
