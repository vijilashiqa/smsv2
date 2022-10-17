import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyOutputType, Toast, ToasterService } from 'angular2-toaster';

@Component({
  selector: 'ngx-globle-fingureprint',
  templateUrl: './globle-fingureprint.component.html',
  styleUrls:['./globle-fingureprint.component.scss']
  
})
export class GlobleFingureprintComponent implements OnInit {
  submit: boolean; head: any = [];
  AddFingerprintForm; opt: any = []; cas: any = [];
  fingerprint; array: any[]; vcdet: any = [];
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
    // private user: userService,
    // public role: RoleService


  ) {
    for (var i = 10; i <= 50; i++) {
      this.fontSize.push({ id: i, name: 'Font-' + i });
    }
  }

  sendfingerprint() {
    this.submit = true;
    if (!this.AddFingerprintForm.valid) {
      return;
    }
    this.AddFingerprintForm.value['msg_type'] = 3
    this.array = [this.AddFingerprintForm.value];
    // console.log(this.array)
    // this.stb.bulkOSDMessage({ message: this.array }).subscribe(result => {
    //   if (result) {
    //     this.toastalert(result['msg'], result['status']);
    //     // console.log(result)
    //   }
    // });


  }
  // toastalert(msg, status) {
  //   const toast: Toast = {
  //     type: status == 1 ? 'success' : 'warning',
  //     title: status == 1 ? 'Success' : 'Failure',
  //     body: msg,
  //     timeout: 5000,
  //     showCloseButton: true,
  //     bodyOutputType: BodyOutputType.TrustedHtml,
  //   };
  //   this.alert.popAsync(toast);
  // }
  
  

  ngOnInit(): void {
    this.createForm();
    this.cord();
    this.op();
    this.getheadend();
  }
  getheadend() {
    // this.das.getheadend().subscribe(result => {
    //   if (result) {
    //     this.head = result;
    //   }
    // });
  }
  getoperator($event = "") {
    // console.log($event)
    // this.user.getoperatorc({ op_type: this.AddFingerprintForm.value['user_type'], head_id: this.AddFingerprintForm.value['headend'] }).subscribe(result => {
    //   if (result) {
    //     this.opt = result
    //   }
    // });
  }
  getcas() {

    if (this.AddFingerprintForm.value['headend'] != '') {
      // this.das.getcashead({ head: this.AddFingerprintForm.value['headend'] }).subscribe(result => {
      //   if (result) {
      //     this.cas = result;
      //   }
      // });
    }
  }
  getVc($event = '') {
    let user = this.AddFingerprintForm.value['operator_name'],
      model = this.AddFingerprintForm.value['castype'];

    // this.stb.getvc({ id: user, pair: 1, cas_id: model, like: $event }).subscribe(result => {
    //   if (result) {
    //     this.vcdet = result;
    //   }
    // });
  }

  cancel() {
    this.submit = false;
    this.createForm();

  }
  scheduletime() {
    this.AddFingerprintForm.value["Time"] == 1 ? this.AddFingerprintForm.get('Schedule').setValidators([Validators.required]) : this.AddFingerprintForm.get('Schedule').clearValidators()
    this.AddFingerprintForm.get('Schedule').updateValueAndValidity();
  }
  cord() {
    this.AddFingerprintForm.value["fp_type"] == 1 ? this.AddFingerprintForm.get('xcord').setValidators([Validators.required]) : this.AddFingerprintForm.get('xcord').clearValidators()
    this.AddFingerprintForm.get('xcord').updateValueAndValidity();
    this.AddFingerprintForm.value["fp_type"] == 1 ? this.AddFingerprintForm.get('ycord').setValidators([Validators.required]) : this.AddFingerprintForm.get('ycord').clearValidators()
    this.AddFingerprintForm.get('ycord').updateValueAndValidity();
  }
  individual() {
    this.AddFingerprintForm.value["stb_cat"] == 0 ? this.AddFingerprintForm.get('vc_no').setValidators([Validators.required]) : this.AddFingerprintForm.get('vc_no').clearValidators()
    this.AddFingerprintForm.get('vc_no').updateValueAndValidity();
  }
  ECM() {
    this.AddFingerprintForm.value["ecm"] == true ? this.AddFingerprintForm.get('broadcaster').setValidators([Validators.required]) : this.AddFingerprintForm.get('broadcaster').clearValidators()
    this.AddFingerprintForm.get('broadcaster').updateValueAndValidity();
    this.AddFingerprintForm.value["ecm"] == true ? this.AddFingerprintForm.get('packages').setValidators([Validators.required]) : this.AddFingerprintForm.get('packages').clearValidators()
    this.AddFingerprintForm.get('packages').updateValueAndValidity();
    this.AddFingerprintForm.value["ecm"] == true ? this.AddFingerprintForm.get('channels').setValidators([Validators.required]) : this.AddFingerprintForm.get('channels').clearValidators()
    this.AddFingerprintForm.get('channels').updateValueAndValidity();
    this.AddFingerprintForm.value["ecm"] == true ? this.AddFingerprintForm.get('channelid').setValidators([Validators.required]) : this.AddFingerprintForm.get('channelid').clearValidators()
    this.AddFingerprintForm.get('channelid').updateValueAndValidity();
  }
  op() {
    this.AddFingerprintForm.value["user_type"] != '' ? this.AddFingerprintForm.get('operator_name').setValidators([Validators.required]) : this.AddFingerprintForm.get('operator_name').clearValidators()
    this.AddFingerprintForm.get('operator_name').updateValueAndValidity();
  }
  createForm() {
    this.AddFingerprintForm = new FormGroup({
      headend: new FormControl('', Validators.required),
      castype: new FormControl('', Validators.required),
      stb_cat: new FormControl('', Validators.required),
      Time: new FormControl('', Validators.required),
      xcord: new FormControl(''),
      ycord: new FormControl(''),
      fp_text_size: new FormControl('', Validators.required),
      fp_bg_color: new FormControl('', Validators.required),
      fp_text_color: new FormControl('', Validators.required),
      operator_name: new FormControl(''),
      user_type: new FormControl(''),
      fp_overt: new FormControl(1),
      Schedule: new FormControl(''),
      duration: new FormControl('', [Validators.required, Validators.max(99999999999)]),
      repetition: new FormControl(1, [Validators.required, Validators.max(999)]),
      intervals: new FormControl(0, [Validators.required, Validators.max(99999999999)]),
      fp_type: new FormControl(1),
      vc_no: new FormControl(''),
      ecm: new FormControl(''),
      channels: new FormControl(''),
      channelid: new FormControl(''),
      broadcaster: new FormControl(''),
      packages: new FormControl('')
    });

  }
}
    
  

