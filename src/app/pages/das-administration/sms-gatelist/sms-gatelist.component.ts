import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-sms-gatelist',
  templateUrl: './sms-gatelist.component.html',
  styleUrls: ['./sms-gatelist.component.scss']
})
export class SmsGatelistComponent implements OnInit {
  search: boolean;
  
  pagedItems: any = [];
  constructor() { }

  ngOnInit(): void {
    this.listsms();
  }
  listsms() {

  }
}
