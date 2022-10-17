import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-addoperator-setting',
  templateUrl: './addoperator-setting.component.html',
  styleUrls: ['./addoperator-setting.component.scss']
})
export class AddoperatorSettingComponent implements OnInit {
  submit: boolean = false; SettingsForm;Settings;
  
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  cancel() {
    this.createForm();

  }
  settings()
  {
    
  }
  createForm() {
    this.SettingsForm = new FormGroup({
      headend: new FormControl(''),
      operator_type: new FormControl(''),
      operator_name: new FormControl(''),
      sms_app: new FormControl(''),
      mobile_sms: new FormControl(''),
      sms_api: new FormControl(''),
      topup_min: new FormControl(''),
      min_amount: new FormControl(''),
      gateway_type: new FormControl(''),
      limit_charges: new FormControl(''),
      sms_gateway: new FormControl(''),
      gateway_through: new FormControl(''),
      pay_gateway: new FormControl(''),
      pay_gateway_through: new FormControl(''),
      pay_gateway_type: new FormControl(''),
      amt_shared: new FormControl(''),
      due_amt: new FormControl(''),
      over_due: new FormControl(''),
      unique_no: new FormControl(''),
      unique_mail: new FormControl(''),
      sender_id: new FormControl(''),
      registration_sms: new FormControl(''),
      registration_email: new FormControl(''),
      basepack_renew_sms: new FormControl(''),
      basepack_renew_email: new FormControl(''),
      auto_renew_sms: new FormControl(''),
      auto_renew_email: new FormControl(''),
      invoice_sms: new FormControl(''),
      invoice_email: new FormControl(''),
      billpaid_sms: new FormControl(''),
      billpaid_email: new FormControl(''),
      alacarte_renew_sms: new FormControl(''),
      alacarte_renew_email: new FormControl(''),
      temporary_suspend_sms: new FormControl(''),
      temporary_suspend_email: new FormControl(''),
      balance_add_sms: new FormControl(''),
      balance_add_email: new FormControl(''),
      base_expiry_sms: new FormControl(''),
      base_expiry_email: new FormControl(''),
      alacarte_expiry_sms: new FormControl(''),
      alacarte_expiry_email: new FormControl(''),
      register_alert_sms: new FormControl(''),
      register_alert_email: new FormControl(''),
      resolve_sms: new FormControl(''),
      resolve_email: new FormControl(''),
      close_sms: new FormControl(''),
      close_email: new FormControl(''),
      assigned_sms: new FormControl(''),
      assigned_email: new FormControl(''),
      register_alert_user_sms: new FormControl(''),
      register_alert_user_email: new FormControl(''),
      assign_alert_sms: new FormControl(''),
      assign_alert_email: new FormControl(''),
      auto_renew: new FormControl(''),
      base_send: new FormControl(''),
      alacarte_send: new FormControl(''),
      Logo: new FormControl(''),
      b_mail: new FormControl(''),
    });
  }
}
  


