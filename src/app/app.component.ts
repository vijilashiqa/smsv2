/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
 

  constructor(private analytics: AnalyticsService, private seoService: SeoService,private toast:ToastrService) {
    setInterval(() => {
      if(!navigator.onLine){
        this.toast.warning('Please Check Your Internt')
      }
    }, 5000);
  }

  ngOnInit(): void {
   
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
