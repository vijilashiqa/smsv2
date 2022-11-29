import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhdcasComponent } from './addhdcas/addhdcas.component';
import { AddoperatorSettingComponent } from './addoperator-setting/addoperator-setting.component';
import { CaslistComponent } from './caslist/caslist.component';
import { HdcaslistComponent } from './hdcaslist/hdcaslist.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { CreateuserComponent } from './create-user/create-user.component';
import { GeoArealistComponent } from './geo-arealist/geo-arealist.component';
import { GeoBranchlistComponent } from './geo-branchlist/geo-branchlist.component';
import { GeoCitylistComponent } from './geo-citylist/geo-citylist.component';
import { GeoCountrylistComponent } from './geo-countrylist/geo-countrylist.component';
import { GeoDistrictlistComponent } from './geo-districtlist/geo-districtlist.component';
import { GeoListlocationComponent } from './geo-listlocation/geo-listlocation.component';
import { GeoPincodelistComponent } from './geo-pincodelist/geo-pincodelist.component';
import { GeoStatelistComponent } from './geo-statelist/geo-statelist.component';
import { HeadendaddComponent } from './headendadd/headendadd.component';
import { HeadendlistComponent } from './headendlist/headendlist.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MsorevenueshareComponent } from './msorevenueshare/msorevenueshare.component';
import { OperatorSettingListComponent } from './operator-setting-list/operator-setting-list.component';
import { SmsAddcreditsComponent } from './sms-addcredits/sms-addcredits.component';
import { SmsCreditslistComponent } from './sms-creditslist/sms-creditslist.component';
import { SmsGateComponent } from './sms-gate/sms-gate.component';
import { SmsGatelistComponent } from './sms-gatelist/sms-gatelist.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';
import { ListuserprofileComponent } from './Listuserprofile/Listuserprofile.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [

  {
    path: 'create-user',
    component: CreateuserComponent,

  },
  {
    path: 'list-user',
    component: ListUserComponent,

  },
  {
    path: 'list-profile',
    component: ListProfileComponent,

  },
  {
    path: 'create-profile',
    component: CreateProfileComponent,

  },
  {
    path: 'operator-setting-list',
    component: OperatorSettingListComponent,

  },

  {
    path: 'addoperator-setting',
    component: AddoperatorSettingComponent,

  },
  {
    path: 'caslist',
    component: CaslistComponent,

  },
  {
    path: 'hdcaslist',
    component: HdcaslistComponent,

  },
  {
    path: 'addhdcas',
    component: AddhdcasComponent,

  },
  {
    path: 'headendlist',
    component: HeadendlistComponent,

  },
  {
    path: 'headendadd',
    component: HeadendaddComponent,

  },
  {
    path: 'geo-listlocation',
    component: GeoListlocationComponent,

  },
  {
    path: 'geo-branchlist',
    component: GeoBranchlistComponent,

  },
  {
    path: 'geo-countylist',
    component: GeoCountrylistComponent,

  },
  {
    path: 'geo-statelist',
    component: GeoStatelistComponent,

  },
  {
    path: 'geo-districtlist',
    component: GeoDistrictlistComponent,

  },
  {
    path: 'geo-citylist',
    component: GeoCitylistComponent,

  },
  {
    path: 'geo-pincodelist',
    component: GeoPincodelistComponent,

  },
  {
    path: 'geo-arealist',
    component: GeoArealistComponent,

  },
  {
    path: 'msorevenueshare',
    component: MsorevenueshareComponent,

  },
  {
    path: 'sms-creditslist',
    component: SmsCreditslistComponent,

  },
  {
    path: 'sms-addcredits',
    component: SmsAddcreditsComponent,

  },
  {
    path: 'sms-gatelist',
    component: SmsGatelistComponent,

  },
  {
    path: 'sms-gate',
    component: SmsGateComponent,

  },

  {

    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {

    path: 'editusre-profile',
    component: EdituserprofileComponent

  },
{
    path :'edit-user',
    component :EditUserComponent
  }
,
  {

    path: 'listuser-profile',
    component: ListuserprofileComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasAdministrationRoutingModule { }
