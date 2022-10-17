import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-sms-creditslist',
  templateUrl: './sms-creditslist.component.html',
  styleUrls: ['./sms-creditslist.component.scss']
})
export class SmsCreditslistComponent implements OnInit {
  search: boolean;
  creditForm;
  pagedItems: any = [];
  constructor() { }

  ngOnInit(): void {
    this.listsms();
    this.createForm();
  }
  listsms() {

  }
  createForm() {
    this.creditForm = new FormGroup({
      headend: new FormControl(''),
      operator_type: new FormControl(''),
      operator_name: new FormControl(''),
      pay_type: new FormControl(''),
      from_date: new FormControl(''),
      to_date: new FormControl(''),
      status: new FormControl(''),
    });
  }

}
