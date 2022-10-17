import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService } from '../../_services/index';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

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

    console.log('controls...........',control);
    if (control[name].invalid) {
      invalid.push(name);
    }
  }
  if (this.AddCustForm.invalid) {
    console.log('Invalid value -----', invalid);
    window.alert('Please fill mandatory fields');
    return;
  }
  // this.val['countryid1'] = this.val['countryid'].id;
  // this.val['stateid1'] = this.val['stateid'].id;
  // this.val['districtid1'] = this.val['districtid'].id;
  // this.val['cityid1'] = this.val['cityid'].id;
  // this.val['areaid1'] = this.val['areaid'].id;
  // console.log('add...', this.val);
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
  console.log('Country Event----', $event);
  this.count = await this.country.listcountry({ like: $event });
  console.log('country', this.count);
}

async getstate($event = '') {
  console.log('get state  calling-----', this.AddCustForm.value['countryid']);
  this.getstates = await this.country.liststate({ country_fk: this.AddCustForm.value['countryid'], like: $event });
}
async getdistrict($event = '') {
  console.log('dist', $event);
  console.log('get distric  calling-----', this.AddCustForm.value['stateid']);
  this.dist = await this.country.listdistrict({ stateid: this.AddCustForm.value['stateid'], like: $event });
  console.log('Get district data', this.dist);

}
async getcity($event = '') {
  console.log('city...........', $event);
  console.log('get distric  calling-----', this.AddCustForm.value['districtid']);
  this.citylist = await this.country.listcity({ district_id: this.AddCustForm.value['districtid'] });
}
async getarea($event = '') {

  this.listarea = await this.country.listarea({ city_id:this.AddCustForm.value['cityid'] });
  console.log('area', this.listarea)
 
}

changeclear(...data) {
  for (let i of data) {
    this.AddCustForm.controls[i].setValue("");
  }
}

typeclearcountry(val = "1") {
  this.changeclear('stateid','districtid', 'cityid', 'area');
}


typeclearstate(val = "1") {
  this.changeclear('districtid', 'cityid', 'area');
}



typecleardist(val = "1") {
  this.changeclear( 'cityid', 'area');
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
      operatorid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      CPassword: new FormControl('', Validators.required),
      stb_no: new FormControl(''),
      hdid: new FormControl('', Validators.required),
      caf_number: new FormControl('', Validators.required),
      First: new FormControl('', Validators.required),
      Last: new FormControl('', Validators.required),
      dob: new FormControl(''),
      bulkopt: new FormControl(true),
      gender: new FormControl('', Validators.required),
      Mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      Phone: new FormControl(''),
      pincode: new FormControl('', Validators.required),
      countryid: new FormControl('', Validators.required),
      stateid: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      districtid: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      Installation: new FormControl('', Validators.required),
      Billing: new FormControl('', Validators.required),
      checkaddr: new FormControl(false),
      Proof: new FormControl('', Validators.required),
      ProofID: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
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
  


