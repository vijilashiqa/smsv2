/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,

} from '@nebular/theme';
import { LoginComponent } from './loginc/loginc.component';
import { LogserviceService } from './pages/_services/logservice.service';
import { RoleservicesService } from './pages/_services/roleservices.service';
import { JwtrequestService } from './pages/_services/jwtrequest.service';
import { APP_BASE_HREF } from '@angular/common';
import { ErrorInterceptor } from './pages/_services/jwtresponse.service';
import { ToasterModule } from 'angular2-toaster';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangepaaswordComponent } from './pages/users/changepaasword/changepaasword.component';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [AppComponent, LoginComponent,],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    ToastrModule.forRoot(),
    TimePickerModule,
    AutocompleteLibModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ToasterModule.forRoot(),
    NgbModule,
//    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
   ],
  bootstrap: [AppComponent],
  providers: [LogserviceService, RoleservicesService,ChangepaaswordComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtrequestService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
