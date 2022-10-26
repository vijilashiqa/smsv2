import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService } from '../../_services/index';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.scss']
})
export class AddCustComponent implements OnInit {
  submit: boolean; stbdet: any = []; file: any; failure: any = [];
  AddCustForm; opt: any = []; arrayBuffer: any;
  loc: any = []; branch: any = []; head: any = [];
  state: any = []; district= []; city: any = [];id;listhead
  pincode: any = []; area= [];  any = [];liststate;listarea;editflag;getstates;dist;editdata;citylist;count
  bulkopt = false; bulkdata = []; s = 0; f = 0;
  keyword = 'name';
  constructor(private country: CountryService,
    private headend: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) { 
    this.submit = false;
  }

  

  ngOnInit(): void {
    this.createForm();
    this.getCountry();
    this.getHeadend();
    
  }
 async addcustomer() {
  this.submit = true;
  console.log('add...', this.val);
  const invalid = [];
  const control = this.ctrl
  for (const name in control) {
    if (control[name].invalid) {
      invalid.push(name);
    }
  }
  if (this.AddCustForm.invalid) {
    console.log('Invalid value -----', invalid);
    window.alert('Please fill mandatory fields');
    return;
  }


  let result1 = this.AddCustForm.value;
   console.log("result +++++++++++++ ",result1)
  // let method = this.id ? 'editheadend' : 'addheadend'
  // console.log('updatelist', method);
  // if (this.id) this.AddCustForm.value['id'] = this.id
  // let result = await this.headService[method](this.AddCustForm.value)
  // if (result && result[0].err_code == 0) {
  //   this.toast.success(result[0]['msg']);
  //   this.route.navigate(['/pages/customer/cust-list'])
  // } else {
  //   this.toast.warning(result[0]['msg'])
  //   console.log('add...', this.val);
  // }
}async getCountry($event = '') {
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
  this.listarea = await this.country.listarea({ city_id:this.AddCustForm.value['city'] });
}

changeclear(...data) {
  for (let i of data) {
    this.AddCustForm.controls[i].setValue("");
  }
}

typeclearcountry(val = "1") {
  this.changeclear('state','district', 'city', 'area');
}


typeclearstate(val = "1") {
  this.changeclear('district', 'city', 'area');
}



typecleardist(val = "1") {
  this.changeclear( 'city', 'area');
}

typeclearcity(val = "1") {
  this.changeclear(  'area');
}

async getHeadend($event = '') {

  this.listhead = await this.headend.getHeadend({ like: $event })
  console.log(this.listhead)
}
  

  
  createForm() {
    this.AddCustForm = new FormGroup({
      operatorid: new FormControl(''),
      userid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
     // CPassword: new FormControl('', Validators.required),
      stb_no: new FormControl(''),
      hdid: new FormControl('', Validators.required),
      cafno: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
    //  Last: new FormControl('', Validators.required),
      dob: new FormControl(''),
      bulkopt: new FormControl(''),
   //   gender: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      phone: new FormControl(''),
      pin_no: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    //  location: new FormControl('', Validators.required),
      //branch: new FormControl('', Validators.required),
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

  async getinitial(fname, data, id) {
    let [result] = data.filter(x => x.id == id)
    this.AddCustForm.get(fname).patchValue(result)
  }
  }
  


