import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-sms-gate',
  templateUrl: './sms-gate.component.html',
  styleUrls: ['./sms-gate.component.scss']
})
export class SmsGateComponent implements OnInit {
  smsgatewayForm; cas: any = []; headend: any = [];
  submit: boolean; cuser: any;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  sms() {
  }
  createForm() {
    this.smsgatewayForm = new FormGroup({
      headend: new FormControl('', Validators.required),
      operator_type: new FormControl('', Validators.required),
      operator_name: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      auth_key: new FormControl('', Validators.required),
      gateway_type: new FormControl('', Validators.required),
      gateway: new FormControl('', Validators.required),
      route: new FormControl(''),
      country: new FormControl(''),
      notes: new FormControl('')
    });
  }

}
