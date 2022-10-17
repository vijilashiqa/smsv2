import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService } from '../../_services/index';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateuserComponent implements OnInit
 {
  
  @ViewChild('tree') public tree;
  nodes = []; head: any = []; filter: string;
  AddUserForm:FormGroup; locandbranch;id;
  liststate;listarea;editflag;getstates;dist;editdata;citylist;count
  submit: boolean;keyword = 'name';
  
   constructor(
    private country: CountryService,
    private headService: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder
    ) { }

   
    
  ngOnInit(): void {
    this.createForm();
    this.getCountry();
    this.getarea();
    this.getdistrict();
    this.getstate();
    this.getcity();
    
  }
 async AddUser() {
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
  if (this.AddUserForm.invalid) {
    console.log('Invalid value -----', invalid);
    window.alert('Please fill mandatory fields');
    return;
  }
  this.val['countryid1'] = this.val['countryid'].id;
  this.val['stateid1'] = this.val['stateid'].id;
  this.val['districtid1'] = this.val['districtid'].id;
  this.val['cityid1'] = this.val['cityid'].id;
  this.val['areaid1'] = this.val['areaid'].id;
  console.log('add...', this.val);
  let method = this.id ? 'editheadend' : 'addheadend'
  console.log('updatelist', method);
  if (this.id) this.AddUserForm.value['id'] = this.id
  let result = await this.headService[method](this.AddUserForm.value)
  if (result && result[0].err_code == 0) {
    this.toast.success(result[0]['msg']);
    this.route.navigate(['/pages/customer/cust-list'])
  } else {
    this.toast.warning(result[0]['msg'])
    console.log('add...', this.val);
  }
}async getCountry() {
  this.count = await this.country.listcountry({});
  console.log('country', this.count);
  if (this.editflag) await this.getinitial('countryid', this.count, this.editdata['countryid'])
}

async getstate($event = '') {
  console.log('get state  calling-----', this.AddUserForm.value['countryid']);
  if (this.editflag) {
    this.getstates = await this.country.liststate({ country_fk: this.editdata['countryid'] });
    console.log('state', this.getstates);
    await this.getinitial('stateid', this.getstates, this.editdata['stateid'])
  } else {
    this.getstates = await this.country.liststate({ country_fk: this.AddUserForm.value['countryid'].id });
    console.log('state', this.getstates);
  }

}

async getdistrict($event = '') {
  console.log('get district   calling.......', this.AddUserForm.value['stateid']);
  if(this.editflag){
this.dist = await this.country.listdistrict({ stateid: this.editdata['stateid'] });
console.log('get diste..............', this.dist);
await this.getinitial('districtid', this.dist, this.editdata['districtid'])
}
  else{
    this.dist = await this.country.listdistrict({ stateid: this.AddUserForm.value['stateid'].id });
    console.log('dist', this.dist);
  }
 
}

async getcity($event = '') {
  if(this.editflag){
    this.citylist = await this.country.listcity({ district_id: this.editdata['districtid'] });
    await this.getinitial('cityid', this.citylist, this.editdata['cityid'])
  }
  else{
    this.citylist = await this.country.listcity({ district_id: this.AddUserForm.value['districtid'].id });
  }

}

async getarea($event = '') {
  if(this.editflag){
    this.listarea = await this.country.listarea({ city_id: this.editdata['cityid'] });
    await this.getinitial('areaid', this.listarea, this.editdata['areaid'])
  }
  else{
    this.listarea = await this.country.listarea({ city_id: this.AddUserForm.value['cityid'].id });
  }
}

  
  

    createForm() 
    {
      this.AddUserForm = new FormGroup({
        ID: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
        CPassword: new FormControl(''),
        First: new FormControl('', Validators.required),
        Last: new FormControl(''),
        headend: new FormControl('', Validators.required),
        dob: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        Mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]),
        Phone: new FormControl(''),
        pin: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
        countryid: new FormControl('', Validators.required),
        stateid: new FormControl('', Validators.required),
        districtid: new FormControl('', Validators.required),
        cityid: new FormControl('', Validators.required),
        areaid: new FormControl('', Validators.required),
        branch: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        Proof: new FormControl('', Validators.required),
        ProofID: new FormControl('', Validators.required),
        Email: new FormControl('', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
        Email2: new FormControl(),
        descr: new FormControl(''),
        profile_type: new FormControl('', Validators.required),
  
      });
  
  
    }


    
  get ctrl() {
    return this.AddUserForm.controls
  }
  get val() {
    return this.AddUserForm.value
  }

  async getinitial(fname, data, id) {
    let [result] = data.filter(x => x.id == id)
    this.AddUserForm.get(fname).patchValue(result)
  }
  }

   
  
    
  
  


  
 

