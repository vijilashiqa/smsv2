import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService } from '../../_services/index';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriberService } from '../../_services/subscriber.service';
import { Md5 } from 'ts-md5';
import * as JSXLSX from 'xlsx';
@Component({
  selector: 'ngx-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.scss']
})
export class AddCustComponent implements OnInit {
  submit: boolean; stbdet: any = []; file: any; failure: any = [];
  AddCustForm; opt: any = []; arrayBuffer: any;
  loc: any = []; branch: any = []; head: any = [];
  state: any = []; district = []; city: any = []; id; listhead
  pincode: any = []; area = []; any = []; liststate; listarea; 
  editflag; getstates; dist; editdata; citylist; count
  bulkopt = false; bulkdata = []; s = 0; f = 0; getoperatorlist; getboxlist;
  constructor(private country: CountryService,
    private headend: HeadendService,
    private toast: ToastrService,
    private router: Router,
    private subscriber: SubscriberService,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.submit = false;
  }

  ngOnInit() {
    this.createForm();
    this.getCountry();
    this.getHeadend();
    this.getbox();

  }
  // async addcustomer() {
  //   this.submit = true;
  //   // console.log('add...', this.val);
  //   const invalid = [];
  //   const control = this.ctrl
  //   for (const name in control) {
  //     if (control[name].invalid) {
  //       invalid.push(name);
  //     }
  //   }
  //   if (this.AddCustForm.invalid) {
  //     console.log('Invalid value -----', invalid);
  //     window.alert('Please fill mandatory fields');
  //     return;
  //   }
  //   let result1 = this.AddCustForm.value;
  //   console.log("result +++++++++++++ ", result1)
  // } 

 async addcustomer() {
    this.submit = true;
    let method;
    if (this.AddCustForm.invalid) {
      return;
    }
    const md5 = new Md5();

    if (!this.bulkopt) {
      method = 'addsubscriber';
    } else {
      if (this.bulkdata.length == 0) {
        this.toast.success('No Data Found');
        return
      } else {
        method = 'addbulksubscriber';
        this.filereader(this.file, result => {
          this.bulkdata = result;
          let total = this.bulkdata.length,
            bulkvald: boolean = false;
          for (var i = 0; i < total; i++) {
            if (!this.bulkdata[i].hasOwnProperty('User Name')) {
              this.toast.warning('Please fill the User Name in Excel Sheet');
              bulkvald = true;
              break;
            }
            if (!this.bulkdata[i].hasOwnProperty('CAF Number')) {
              this.toast.warning('Please fill the CAF Number in Excel Sheet');
              bulkvald = true;
              break;
            }
            if (!this.bulkdata[i].hasOwnProperty('First Name')) {
              this.toast.warning('Please fill the First Name in Excel Sheet');
              bulkvald = true;
              break;
            }
            if (!this.bulkdata[i].hasOwnProperty('Password')) {
              this.toast.warning('Please fill the Password in Excel Sheet');
              bulkvald = true;
              break;
            } 
            if (!this.bulkdata[i].hasOwnProperty('STB Number')) {
              this.toast.warning('Please fill the STB Number in Excel Sheet');
              bulkvald = true;
              break;
            }
          };
          for (var i = 0; i < total && !bulkvald; ++i) {
            for (var j = i + 1; j < total; ++j) {
              if (this.bulkdata[i]['User Name'] == this.bulkdata[j]['User Name'] ||
                this.bulkdata[i]['STB Number'] == this.bulkdata[j]['STB Number'] ||
                (this.bulkdata[i]['CAF Number'] + '') == (this.bulkdata[j]['CAF Number'] + '')
              ) {
                this.toast.warning('Duplication In Excel Pls Check Username Or STB Number Or CAF Number');
                bulkvald = true;
                break;
              }
            }
          }
          if (bulkvald) {
            return;
          }
          this.AddCustForm.value['hdid'] = this.AddCustForm.value['hdid'];
          this.AddCustForm.value['userid']=this.AddCustForm.value['userid'];
          this.AddCustForm.value['bulkdata'] = this.bulkdata;
        });
      }
    }
    this.s = 0; this.f = 0; this.failure = [];
    let s = 0, total = this.bulkdata.length;
    console.log("bulk data addaed ",this.bulkdata)
    if (method == 'addsubscriber') {
      let result = await this.subscriber.addsubscriber(this.AddCustForm.value);
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]["msg"]);
        this.router.navigate(["/pages/customer/cust-list"]);
      } else {
        this.toast.warning(result[0]["msg"]);
      }
    }
     else
      {
      this.bulkdata.forEach(item => {
        this.AddCustForm.value['bulkdata'] = item;
        this.subscriber[method](this.AddCustForm.value).subscribe(result => {
          // console.log(result);
          if (result['failure']) {
            this.failure.push(result['failure']);
            this.f++;
          } else {
            this.s++;
          }
          s++;
          if (s == total) {
            if (this.failure.length == 0) {
            this.toast.success(result[0]["msg"]);
            this.router.navigate(["/pages/customer/cust-list"]);
          } else {
            this.toast.warning(result[0]["msg"]);
          }
          }
        });
      })
    }
  }
    


  changeListener(file) {
    this.file = file;
    this.filereader(this.file, result => {
      this.bulkdata = result;
    });
  }

  filereader(file, callback) {
    if (file) {
      let fileReader = new FileReader(), filedata;
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = JSXLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        // console.log(JSXLSX.utils.sheet_to_json(worksheet,{raw:true}));
        callback(JSXLSX.utils.sheet_to_json(worksheet, { raw: true }));
      }
      fileReader.readAsArrayBuffer(file);
    } else {
      callback([]);
    }
  }

  // toastalert(msg, status = 0) {
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

  bulkvalid() {
    let form = this.AddCustForm;
    form.get('profileid').clearValidators();
    form.get('password').clearValidators();
    form.get('stb_no').clearValidators();
    form.get('cafno').clearValidators();
    form.get('fullname').clearValidators();
    form.get('mobile').clearValidators();
    form.get('pin_no').clearValidators();
    form.get('country').clearValidators();
    form.get('state').clearValidators();
    form.get('district').clearValidators();
    form.get('city').clearValidators();
    form.get('area').clearValidators();
    form.get('installation_addr').clearValidators();
    form.get('billing_addr').clearValidators();
    form.get('proof_type').clearValidators();
    form.get('proof_id').clearValidators();
    form.get('email').clearValidators();
    if (!this.bulkopt) {
      form.get('profileid').setValidators(Validators.required);
      form.get('password').setValidators(Validators.required);
      form.get('stb_no').setValidators(Validators.required);
      form.get('cafno').setValidators(Validators.required);
      form.get('fullname').setValidators(Validators.required);
      form.get('mobile').setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
      form.get('pin_no').setValidators(Validators.required);
      form.get('country').setValidators(Validators.required);
      form.get('state').setValidators(Validators.required);
      form.get('district').setValidators(Validators.required);
      form.get('city').setValidators(Validators.required);
      form.get('area').setValidators(Validators.required);
      form.get('installation_addr').setValidators(Validators.required);
      form.get('billing_addr').setValidators(Validators.required);
      form.get('proof_type').setValidators(Validators.required);
      form.get('proof_id').setValidators(Validators.required);
      form.get('email').setValidators(Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}"));
    }
    form.get('profileid').updateValueAndValidity();
    form.get('password').updateValueAndValidity();
    form.get('stb_no').updateValueAndValidity();
    form.get('cafno').updateValueAndValidity();
    form.get('fullname').updateValueAndValidity();
    form.get('mobile').updateValueAndValidity();
    form.get('pin_no').updateValueAndValidity();
    form.get('country').updateValueAndValidity();
    form.get('state').updateValueAndValidity();
    form.get('district').updateValueAndValidity();
    form.get('city').updateValueAndValidity();
    form.get('area').updateValueAndValidity();
    form.get('installation_addr').updateValueAndValidity();
    form.get('billing_addr').updateValueAndValidity();
    form.get('proof_type').updateValueAndValidity();
    form.get('proof_id').updateValueAndValidity();
    form.get('email').updateValueAndValidity();
  }



  
  async getCountry($event = '') {
    this.count = await this.country.listcountry({ like: $event });
  }

  async getstate($event = '') {
    this.getstates = await this.country.liststate({ country_fk: this.AddCustForm.value['country'], like: $event });
  }
  async getdistrict($event = '') {
    this.dist = await this.country.listdistrict({ stateid: this.AddCustForm.value['state'], like: $event });
  }
  async getcity($event = '') {
    this.citylist = await this.country.listcity({ district_id: this.AddCustForm.value['district'] });
  }
  async getarea($event = '') {
    this.listarea = await this.country.listarea({ city_id: this.AddCustForm.value['city'] });
  }

  changeclear(...data) {
    for (let i of data) {
      this.AddCustForm.controls[i].setValue("");
    }
  }

  typeclearcountry(val = "1") {
    this.changeclear('state', 'district', 'city', 'area');
  }


  typeclearstate(val = "1") {
    this.changeclear('district', 'city', 'area');
  }

  typecleardist(val = "1") {
    this.changeclear('city', 'area');
  }

  typeclearcity(val = "1") {
    this.changeclear('area');
  }

  typeclearopr(){
    this.changeclear('userid' ,'stb_no')
  }

  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }

  async getoperator() {
    this.getoperatorlist = await this.subscriber.getoperator({ hdid: this.AddCustForm.value['hdid'] })
    console.log("operator list ", this.getoperatorlist)

  }


  async getbox() {
    this.getboxlist = await this.subscriber.getbox({ hdid: this.AddCustForm.value['hdid'] })
    console.log('getbox', this.getboxlist)
  }

  createForm() {
    this.AddCustForm = new FormGroup({
      userid: new FormControl('',Validators.required),
      profileid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      stb_no: new FormControl(''),
      hdid: new FormControl('', Validators.required),
      cafno: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      dob: new FormControl(''),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      phone: new FormControl(''),
      pin_no: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      installation_addr: new FormControl('', Validators.required),
      billing_addr: new FormControl('', Validators.required),
      same_addr: new FormControl(true),
      proof_type: new FormControl('', Validators.required),
      proof_id: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
      descr: new FormControl(''),
      bulk: new FormControl('')
    });


  }
  get ctrl() {
    return this.AddCustForm.controls
  }
  get val() {
    return this.AddCustForm.value
  }
}



