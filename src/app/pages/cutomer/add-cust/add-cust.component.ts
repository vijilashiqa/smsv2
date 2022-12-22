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
  state: any = []; district = []; city: any = []; id; listhead; bulk: any = [];
  pincode: any = []; area = []; any = []; liststate; listarea; bulkmeta: any = [];
  editflag; getstates; dist; editdata; citylist; count; disabled = false; editable: boolean = false;
  bulkopt = false; bulkdata = []; s = 0; f = 0; getoperatorlist; getboxlist; getboxeditl
  constructor(private country: CountryService,
    private headend: HeadendService,
    private toast: ToastrService,
    private router: Router,
    private subscribers: SubscriberService,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.submit = false;
  }

  async ngOnInit() {
    this.id = this.aRoute.snapshot.queryParams.id;
    this.createForm();
    this.getCountry();
    this.getHeadend();
    this.getbox();
    this.getboxedit();
    if (this.id) {
      console.log('id.................', this.id);
      this.disabled = !this.disabled;
      this.editable = true;
      this.editflag = true;
      await this.edit();
      await this.createForm();
      await this.getHeadend();
      await this.getoperator();
      this.getboxedit();
      this.getCountry();
      this.getstate();
      this.getdistrict();
      this.getcity();
      this.getarea();

    }

  }
  metavalue() {
    this.bulkmeta = [
      {
        msg: "Please fill User Name",
        label: "User Name * ",
        assign_to: "profileid",
        required: true,
      },
      {
        msg: "Please fill CAF Number",
        label: "CAF Number *",
        assign_to: "cafno",
        required: true,
      },
      {
        msg: "Please fill First Name",
        label: "First Name *",
        assign_to: "fullname",
        required: true,
      },

      {
        msg: "Please fill Password",
        label: "Password *",
        assign_to: "password",
        required: true,
      },

      {
        msg: "Please fill Mobile Number",
        label: "Mobile Number *",
        assign_to: "mobile",
        required: true,
      },


      {
        msg: "Please fill Proof Type",
        label: "Proof Type *",
        assign_to: "proof_type",
        required: true,
      },


      {
        msg: "Please fill STB Number",
        label: "STB Number *",
        assign_to: "stb_no",
        required: true,
      },


      {
        msg: "Please fill Address",
        label: "Address *",
        assign_to: "installation_addr",
        required: true,
      },


      {
        msg: "Please fill Proof ID",
        label: "Proof ID *",
        assign_to: "proof_id",
        required: true,
      },

      {
        msg: "Please fill Email ID",
        label: "Email *",
        assign_to: "email",
        required: true,
      },

      {
        msg: "Please fill City",
        label: "City *",
        assign_to: "city",
        required: true,
      },
      {
        msg: "Please fill Area",
        label: "Area *",
        assign_to: "area",
        required: true,
      },
      {
        msg: "Please fill Pincode ",
        label: "Pincode *",
        assign_to: "pin_no",
        required: true,
      },
    ];
    return this.bulkmeta;
  }
  changeListener(file) {
    this.file = file;
    this.filereader(this.file, (result) => {
      this.bulk = result;
      console.log("result............", this.bulk);
    });
  }

  filereader(file, callback) {
    if (file) {
      let fileReader = new FileReader(),
        filedata;
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = JSXLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        callback(JSXLSX.utils.sheet_to_json(worksheet, { raw: true }));
      };
      fileReader.readAsArrayBuffer(file);
    } else {
      callback([]);
    }
  }
  async addcustomer() {
    this.submit = true;
    const invalid = [];
    const control = this.AddCustForm.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.AddCustForm.invalid) {
      console.log("Invalid value -----", invalid);
      return;
    }
    if (!this.val["bulkopt"]) {
      let result = await this.subscribers.addsubscriber(this.AddCustForm.value)
      console.log("add...", result);
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]["msg"]);
        this.router.navigate(["/pages/customer/cust-list"]);
      } else {
        this.toast.warning(result[0]["msg"]);
      }
    }
    if (this.bulk.length &&this.val["bulkopt"]) {
      let result = this.metavalue();
      for (let i = 0; i < this.bulk.length; i++) {
        for (let meta of result) {
          if (!this.bulk[i].hasOwnProperty(meta.label) && meta.required) {
            this.toast.warning(meta.msg);
            return;
          } else {
            this.bulk[i][meta.assign_to] = this.bulk[i][meta.label];
          }
        }
      }
      this.val["bulkdata"] = this.bulk;
      console.log("form", this.val);
      let resp = await this.subscribers.bulkaddsubscriber(this.AddCustForm.value)
      console.log("bulkResult????????????????? ", resp);
      if (resp && resp[0].err_code == 0) {
        this.toast.success(resp[0]["msg"]);
        this.router.navigate(["/pages/customer/cust-list"]);
      } else {
        this.toast.warning(resp[0]["msg"]);
      }
    }
  }

  async edit() {
    console.log('edit herer')
    this.editdata = await this.subscribers.editsubscriber({ custid: this.id });
    console.log('editdata .....', this.editdata)
  }


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
    this.dist = await this.country.listdistrict({ state_fk: this.AddCustForm.value['state'], like: $event });
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

  typeclearopr() {
    this.changeclear('userid', 'stb_no')
  }

  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }

  async getoperator() {
    this.getoperatorlist = await this.subscribers.getoperator({ hdid: this.AddCustForm.value['hdid'] })
    console.log("operator list ", this.getoperatorlist)

  }
  async getbox() {
    this.getboxlist = await this.subscribers.getbox({ hdid: this.AddCustForm.value['hdid'] })
    console.log('getbox', this.getboxlist)
  }
  async getboxedit() {
    this.getboxeditl = await this.subscribers.getboxedit({ hdid: this.AddCustForm.value['hdid'] })
    console.log("getboxlistedir", this.getboxeditl)
  }

  createForm() {
    this.AddCustForm = new FormGroup({
      userid: new FormControl(this.editdata?.userid || '', Validators.required),
      profileid: new FormControl(this.editdata?.profileid || '', Validators.required),
      password: new FormControl('', Validators.required),
      stb_no: new FormControl(this.editdata?.boxid || ''),
      hdid: new FormControl(this.editdata?.hdid || '', Validators.required),
      cafno: new FormControl(this.editdata?.cafno || '', Validators.required),
      fullname: new FormControl(this.editdata?.fullname || '', Validators.required),
      dob: new FormControl(this.editdata?.dob?.slice(0, 10) || ''),
      mobile: new FormControl(this.editdata?.mobile || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      phone: new FormControl(this.editdata?.phone || ''),
      pin_no: new FormControl(this.editdata?.pin_no || '', Validators.required),
      country: new FormControl(this.editdata?.country || '', Validators.required),
      state: new FormControl(this.editdata?.state || '', Validators.required),
      district: new FormControl(this.editdata?.district || '', Validators.required),
      city: new FormControl(this.editdata?.city || '', Validators.required),
      area: new FormControl(this.editdata?.area || '', Validators.required),
      installation_addr: new FormControl(this.editdata?.installation_addr || '', Validators.required),
      billing_addr: new FormControl(this.editdata?.billing_addr || '', Validators.required),
      same_addr: new FormControl(true),
      proof_type: new FormControl(this.editdata?.proof_type || '', Validators.required),
      proof_id: new FormControl(this.editdata?.proof_id || '', Validators.required),
      email: new FormControl(this.editdata?.email || '', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
      descr: new FormControl(this.editdata?.descr || ''),
      bulk: new FormControl(''),
      bulkopt: new FormControl(false),
    });


  }
  get ctrl() {
    return this.AddCustForm.controls
  }
  get val() {
    return this.AddCustForm.value
  }
}



