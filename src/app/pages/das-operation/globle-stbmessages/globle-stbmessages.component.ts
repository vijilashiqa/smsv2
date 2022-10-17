import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'ngx-globle-stbmessages',
  templateUrl: './globle-stbmessages.component.html',
  styleUrls: ['./globle-stbmessages.component.scss']
})
export class GlobleStbmessagesComponent implements OnInit {
  submit: boolean; cas: any = []; vcdet: any = [];
  AddSTBmsg; head: any = []; opt: any = [];
  allSTBCategory = [
    { id: 1, name: 'Individual' },
    { id: 2, name: 'All STBs' },
  ];
  BGColor = [
    { id: 0, name: 'black' },
    { id: 1, name: 'white' },
    { id: 2, name: 'Red' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'Green' },
    { id: 5, name: 'Blue' },
    { id: 6, name: 'Gray' },
    { id: 7, name: 'Orange' },
    { id: 8, name: 'Violet' },
    { id: 9, name: 'Brown' },
  ];
  TextColor = [
    { id: 0, name: 'black' },
    { id: 1, name: 'white' },
    { id: 2, name: 'Red' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'Green' },
    { id: 5, name: 'Blue' },
    { id: 6, name: 'Gray' },
    { id: 7, name: 'Orange' },
    { id: 8, name: 'Violet' },
    { id: 9, name: 'Brown' },
  ];
  fontSize = [];

  constructor(
    // private alert: ToasterService,
    private router: Router,
    private _fb: FormBuilder,
    // private stb: STBService,
    // private das: Das_Admin,
    // private user: userService
  ) {
    for (var i = 10; i <= 50; i++) {
      this.fontSize.push({ id: i, name: 'Font-' + i });
    }
  }

  sendmsg() {

    this.submit = true;
    // console.log(this.AddSTBmsg.value)
    if (!this.AddSTBmsg.valid) {
      return;
    }
    // console.log([this.AddSTBmsg.value])
    let array = [this.AddSTBmsg.value];

    // this.stb.bulkOSDMessage({ message: array }).subscribe(result => {
    //   if (result) {
    //     // console.log(result)
    //   }
    // });


  }


  

  ngOnInit(): void {
    this.createForm();
    this.getheadend();
    this.scrool();
    this.osd();
  }
  cancel() {
    this.submit = false;
    this.createForm();

  }
  scheduletime() {
    this.AddSTBmsg.value["Time"] == 1 ? this.AddSTBmsg.get('Schedule').setValidators([Validators.required]) : this.AddSTBmsg.get('Schedule').clearValidators()
    this.AddSTBmsg.get('Schedule').updateValueAndValidity();
  }
  individual() {
    this.AddSTBmsg.value["stb_cat"] == 0 ? this.AddSTBmsg.get('vc_no').setValidators([Validators.required]) : this.AddSTBmsg.get('vc_no').clearValidators()
    this.AddSTBmsg.get('vc_no').updateValueAndValidity();
  }
  getheadend() {
    // // this.das.getheadend().subscribe(result => {
    // //   if (result) {
    // //     this.head = result;
    // //   }
    // });
  }
  getoperator($event = "") {
    // console.log($event)
    // this.user.getoperatorc({ op_type: this.AddSTBmsg.value['user_type'], head_id: this.AddSTBmsg.value['headend'] }).subscribe(result => {
    //   if (result) {
    //     this.opt = result
    //   }
    // });
  }
  getcas() {

    if (this.AddSTBmsg.value['headend'] != '') {
      // this.das.getcashead({ head: this.AddSTBmsg.value['headend'] }).subscribe(result => {
      //   if (result) {
      //     this.cas = result;
      //   }
      // });
    }
  }

  getVc($event = '') {
    let user = this.AddSTBmsg.value['operator_name'],
      model = this.AddSTBmsg.value['castype'];

    // this.stb.getvc({ id: user, pair: 1, cas_id: model, like: $event }).subscribe(result => {
    //   if (result) {
    //     this.vcdet = result;
    //     // console.log(this.vcdet)
    //   }
    // });
  }

  ECM() {
    this.AddSTBmsg.value["ecm"] == true ? this.AddSTBmsg.get('broadcaster').setValidators([Validators.required]) : this.AddSTBmsg.get('broadcaster').clearValidators()
    this.AddSTBmsg.get('broadcaster').updateValueAndValidity();
    this.AddSTBmsg.value["ecm"] == true ? this.AddSTBmsg.get('packages').setValidators([Validators.required]) : this.AddSTBmsg.get('packages').clearValidators()
    this.AddSTBmsg.get('packages').updateValueAndValidity();
    this.AddSTBmsg.value["ecm"] == true ? this.AddSTBmsg.get('channels').setValidators([Validators.required]) : this.AddSTBmsg.get('channels').clearValidators()
    this.AddSTBmsg.get('channels').updateValueAndValidity();
    this.AddSTBmsg.value["ecm"] == true ? this.AddSTBmsg.get('channelid').setValidators([Validators.required]) : this.AddSTBmsg.get('channelid').clearValidators()
    this.AddSTBmsg.get('channelid').updateValueAndValidity();
  }
  op() {
    this.AddSTBmsg.value["user_type"] != '' ? this.AddSTBmsg.get('operator_name').setValidators([Validators.required]) : this.AddSTBmsg.get('operator_name').clearValidators()
    this.AddSTBmsg.get('operator_name').updateValueAndValidity();
  }
  msg() {
    this.AddSTBmsg.value["msg_type"] == 2 ? this.AddSTBmsg.get('msg_title').setValidators([Validators.required]) : this.AddSTBmsg.get('msg_title').clearValidators()
    this.AddSTBmsg.get('msg_title').updateValueAndValidity();
  }
  scrool() {
    this.AddSTBmsg.value["msg_type"] == 1 ? this.AddSTBmsg.get('scrool_type').setValidators([Validators.required]) : this.AddSTBmsg.get('scrool_type').clearValidators()
    this.AddSTBmsg.get('scrool_type').updateValueAndValidity();
  }
  osd() {
    this.AddSTBmsg.value["msg_type"] == 1 ? this.AddSTBmsg.get('osd_type').setValidators([Validators.required]) : this.AddSTBmsg.get('osd_type').clearValidators()
    this.AddSTBmsg.get('osd_type').updateValueAndValidity();
  }
  duration() {
    this.AddSTBmsg.value["msg_type"] == 1 ? this.AddSTBmsg.get('duration').setValidators([Validators.required]) : this.AddSTBmsg.get('duration').clearValidators()
    this.AddSTBmsg.get('duration').updateValueAndValidity();
  }


  createForm() {
    this.AddSTBmsg = new FormGroup({
      headend: new FormControl('', Validators.required),
      castype: new FormControl('', Validators.required),
      stb_cat: new FormControl('', Validators.required),
      Time: new FormControl('', Validators.required),
      vc_no: new FormControl(''),
      fp_text_size: new FormControl(''),
      fp_bg_color: new FormControl(''),
      fp_text_color: new FormControl(''),
      user_type: new FormControl(''),
      operator_name: new FormControl(''),
      Schedule: new FormControl(''),
      duration: new FormControl('', [Validators.max(99999999999)]),
      repetition: new FormControl(1, [Validators.required, Validators.max(999)]),
      intervals: new FormControl(0, [Validators.required, Validators.max(99999999999)]),
      msg_type: new FormControl(1),
      osd_type: new FormControl(0),
      msg_title: new FormControl(''),
      msg: new FormControl('', Validators.required),
      ecm: new FormControl(''),
      broadcaster: new FormControl(''),
      packages: new FormControl(''),
      channels: new FormControl(''),
      channelid: new FormControl(''),
      lock: new FormControl(''),
      scrool_type: new FormControl(''),

    });

  }

}
  

