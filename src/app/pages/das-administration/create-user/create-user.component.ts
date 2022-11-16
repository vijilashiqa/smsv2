import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService } from '../../_services/index';


@Component({
  selector: 'ngx-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateuserComponent implements OnInit
 {
  
  @ViewChild('tree') public tree;
  nodes = []; head: any = []; filter: string;
  AddUserForm:FormGroup; locandbranch;id;listhead
  liststate;listarea;editflag;getstates;dist;editdata;citylist;count
  submit: boolean;keyword = 'name';
  
   constructor(
    private country: CountryService,
    private headService: HeadendService,
   
    ) { }

   
    
  ngOnInit(): void {
    this.createForm();
    this.getHeadend();
    this.getCountry();
    this.getarea();
    this.getdistrict();
    this.getstate();
    this.getcity();
    
  }
 async AddUser() {
  this.submit = true;
  console.log('add...', this.AddUserForm.value);
  const invalid = [];
  const control =this.AddUserForm.controls
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

  // let method = this.id ? 'editheadend' : 'addheadend'
  // console.log('updatelist', method);
  // if (this.id) this.AddUserForm.value['id'] = this.id
  // let result = await this.headService[method](this.AddUserForm.value)
  // if (result && result[0].err_code == 0) {
  //   this.toast.success(result[0]['msg']);
  //   this.route.navigate(['/pages/customer/cust-list'])
  // } else {
  //   this.toast.warning(result[0]['msg'])
  //   console.log('add...', this.val);
  // }
}
async getHeadend($event = '') {

  this.listhead = await this.headService.getHeadend({ like: $event })
  console.log(this.listhead)
}

async getCountry($event = '') {
  console.log('Country Event----', $event);
  this.count = await this.country.listcountry({ like: $event });
  console.log('country', this.count);
}

async getstate($event = '') {
  console.log('get state  calling-----', this.AddUserForm.value['countryid']);
  this.getstates = await this.country.liststate({ country_fk: this.AddUserForm.value['countryid'], like: $event });
}
async getdistrict($event = '') {
  console.log('dist', $event);
  console.log('get distric  calling-----', this.AddUserForm.value['stateid']);
  this.dist = await this.country.listdistrict({ stateid: this.AddUserForm.value['stateid'], like: $event });
  console.log('Get district data', this.dist);

}
async getcity($event = '') {
  console.log('city...........', $event);
  console.log('get distric  calling-----', this.AddUserForm.value['districtid']);
  this.citylist = await this.country.listcity({ district_id: this.AddUserForm.value['districtid'] });
}
async getarea($event = '') {

  this.listarea = await this.country.listarea({ city_id:this.AddUserForm.value['cityid'] });
  console.log('area', this.listarea)
 
}

  
changeclear(...data) {
  for (let i of data) {
    this.AddUserForm.controls[i].setValue("");
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


    createForm() 
    {
      this.AddUserForm = new FormGroup({
        ID: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
        CPassword: new FormControl(''),
        First: new FormControl('', Validators.required),
        Last: new FormControl(''),
        hdid: new FormControl('', Validators.required),
        dob: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        Mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]),
        Phone: new FormControl(''),
        pincode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
        countryid: new FormControl('', Validators.required),
        stateid: new FormControl('', Validators.required),
        districtid: new FormControl('', Validators.required),
        cityid: new FormControl('', Validators.required),
        area: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        Proof: new FormControl('', Validators.required),
        ProofID: new FormControl('', Validators.required),
        Email: new FormControl('', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
        Email2: new FormControl(),
        descr: new FormControl(''),
        profile_type: new FormControl('', Validators.required),
  
      });
    }
  }

   
  
    
  
  


  
 

