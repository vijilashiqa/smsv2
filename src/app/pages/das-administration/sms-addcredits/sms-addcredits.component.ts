import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-sms-addcredits',
  templateUrl: './sms-addcredits.component.html',
  styleUrls: ['./sms-addcredits.component.scss']
})
export class SmsAddcreditsComponent implements OnInit {
  smsForm;
  submit: boolean;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  SmsCredit() {

  }

  createForm() {
    this.smsForm = new FormGroup({
      headend: new FormControl(''),
      operator_type: new FormControl(''),
      operator_name: new FormControl(''),
      sms_limit: new FormControl(''),
      limit: new FormControl(''),
      limit_validity: new FormControl(''),
      validity_period: new FormControl(''),
      price: new FormControl(''),
      pay_type: new FormControl(''),
      reason: new FormControl(''),
      note: new FormControl(''),
      utr: new FormControl(''),
      upload: new FormControl(''),

    });

  }

}
