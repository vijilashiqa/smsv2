import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { VendorlistComponent} from './vendorlist/vendorlist.component';
import { StblistComponent } from './stblist/stblist.component';
import { ModellistComponent } from './modellist/modellist.component';
import { vendordetailslistComponent } from './vendordetailslist/vendordetailslist.component';
import { BusinesslistdetailsComponent } from './businesslistdetails/businesslistdetails.component';
import { addvendordetailsComponent } from './Addvendordetails/addvendordetails.component';
import { HsnlistComponent } from './hsnlist/hsnlist.component';
import { ListstockComponent } from './liststock/liststock.component';
import { AddstockComponent } from './addstock/addstock.component';
import { FaultstbComponent } from './faultstb/faultstb.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AddvendorComponent } from './addvendor/Addvendor.component';
import { PagerService } from '../_services/index';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AddstbtypeComponent } from './addstbtype/addstbtype.component';
import { AddmodelComponent } from './addmodel/addmodel.component';
import { AddhsnComponent } from './addhsn/addhsn.component';
import { EditstockComponent } from './editstock/editstock.component';
@NgModule({
  declarations: [
    VendorlistComponent,
    StblistComponent,
    ModellistComponent,
    vendordetailslistComponent,
    BusinesslistdetailsComponent,
    addvendordetailsComponent,
    HsnlistComponent,
    ListstockComponent,
    AddstockComponent,
    FaultstbComponent,
    AddvendorComponent,
    AddstbtypeComponent,
    AddmodelComponent,
    AddhsnComponent,
    EditstockComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
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
    AutoCompleteNModule,
    AutocompleteLibModule,
    ThemeModule
  ],
  providers: [
    
    PagerService ,
  ],
  entryComponents:[
    AddvendorComponent,
    AddstbtypeComponent,
    AddmodelComponent,
    AddhsnComponent
  ],
})
export class InventoryModule { }
