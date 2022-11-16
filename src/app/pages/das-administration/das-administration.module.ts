import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasAdministrationRoutingModule } from './das-administration-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { NbAccordionModule, NbButtonModule, NbCardModule,NbListModule,NbRouteTabsetModule,NbStepperModule,NbTabsetModule, NbTreeGridModule, NbUserModule  } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { CreateuserComponent } from './create-user/create-user.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { ProfileComponent } from './profile/profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { OperatorSettingListComponent } from './operator-setting-list/operator-setting-list.component';
import { AddoperatorSettingComponent } from './addoperator-setting/addoperator-setting.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { CaslistComponent } from './caslist/caslist.component';
import { HdcaslistComponent } from './hdcaslist/hdcaslist.component';
import { AddhdcasComponent } from './addhdcas/addhdcas.component';
import { HeadendlistComponent } from './headendlist/headendlist.component';
import { HeadendaddComponent } from './headendadd/headendadd.component';
import { HeadendeditComponent } from './headendedit/headendedit.component';
import { HeadendviewComponent } from './headendview/headendview.component';
import { GeoListlocationComponent } from './geo-listlocation/geo-listlocation.component';
import { GeoBranchlistComponent } from './geo-branchlist/geo-branchlist.component';
import { GeoCountrylistComponent } from './geo-countrylist/geo-countrylist.component';
import { GeoStatelistComponent } from './geo-statelist/geo-statelist.component';
import { GeoDistrictlistComponent } from './geo-districtlist/geo-districtlist.component';
import { GeoCitylistComponent } from './geo-citylist/geo-citylist.component';
import { GeoPincodelistComponent } from './geo-pincodelist/geo-pincodelist.component';
import { GeoArealistComponent } from './geo-arealist/geo-arealist.component';
import { GeoAddlocationComponent } from './geo-addlocation/geo-addlocation.component';
import { GeoAddbranchComponent } from './geo-addbranch/geo-addbranch.component';
import { GeoAddcountryComponent } from './geo-addcountry/geo-addcountry.component';
import { GeoAddstateComponent } from './geo-addstate/geo-addstate.component';
import { GeoAdddistrictComponent } from './geo-adddistrict/geo-adddistrict.component';
import { GeoAddcityComponent } from './geo-addcity/geo-addcity.component';
import { GeoAddpincodeComponent } from './geo-addpincode/geo-addpincode.component';
import { GeoAddareaComponent } from './geo-addarea/geo-addarea.component';
import { MsorevenueshareComponent } from './msorevenueshare/msorevenueshare.component';
import { SmsCreditslistComponent } from './sms-creditslist/sms-creditslist.component';
import { SmsAddcreditsComponent } from './sms-addcredits/sms-addcredits.component';
import { SmsGatelistComponent } from './sms-gatelist/sms-gatelist.component';
import { SmsGateComponent } from './sms-gate/sms-gate.component';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { PagerService } from '../_services/index';
import { TreeModule } from 'angular-tree-component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AddcasComponent } from './addcas/addcas.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListuserprofileComponent } from './Listuserprofile/Listuserprofile.component';
import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';  
export const MY_NATIVE_FORMATS = {
  fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' },
  datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },};


@NgModule({
  declarations: [
    
    ListUserComponent,
    CreateuserComponent,
    ProfileComponent,
    ListProfileComponent,
    CreateProfileComponent,
    OperatorSettingListComponent,
    AddoperatorSettingComponent,
    CaslistComponent,
    HdcaslistComponent,
    AddhdcasComponent,
    HeadendlistComponent,
    HeadendaddComponent,
    HeadendeditComponent,
    HeadendviewComponent,
    GeoListlocationComponent,
    GeoBranchlistComponent,
    GeoCountrylistComponent,
    GeoStatelistComponent,
    GeoDistrictlistComponent,
    GeoCitylistComponent,
    GeoPincodelistComponent,
    GeoArealistComponent,
    GeoAddlocationComponent,
    GeoAddbranchComponent,
    GeoAddcountryComponent,
    GeoAddstateComponent,
    GeoAdddistrictComponent,
    GeoAddcityComponent,
    GeoAddpincodeComponent,
    GeoAddareaComponent,
    MsorevenueshareComponent,
    SmsCreditslistComponent,
    SmsAddcreditsComponent,
    SmsGatelistComponent,
    SmsGateComponent,
    AddcasComponent,
    EditProfileComponent,
    ListuserprofileComponent,
    EdituserprofileComponent,

   ],
  imports: [
    CommonModule,
    DasAdministrationRoutingModule,
    ReactiveFormsModule,
    ThemeModule,
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
    TreeModule.forRoot(),
    NbAccordionModule,
    NbUserModule,
    TreeViewModule,
    LayoutRoutingModule,NbTreeGridModule,
    AutoCompleteNModule,
    AutocompleteLibModule,
    ModalModule.forRoot()
   ],
  providers: [
    
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS },PagerService ,BsModalService
  ],
  entryComponents:[
    GeoAddcountryComponent,
    GeoAdddistrictComponent,
    GeoAddcityComponent,
    GeoAddpincodeComponent
  ],
})
export class DasAdministrationModule { }
