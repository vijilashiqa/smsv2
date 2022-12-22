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
  selector: 'ngx-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.scss']
})
export class EditCustComponent implements OnInit {
  submit: boolean; stbdet: any = []; file: any; failure: any = [];
  editcust; opt: any = []; arrayBuffer: any;
  loc: any = []; branch: any = []; head: any = [];
  state: any = []; district = []; city: any = []; id; listhead
  pincode: any = []; area = []; any = []; liststate; listarea; 
  editflag; getstates; dist; editdata; citylist; count;disabled = false;editable: boolean = false;
  bulkopt = false; bulkdata = []; s = 0; f = 0; getoperatorlist; getboxlist;getboxeditl
  constructor(private country: CountryService,
    private headend: HeadendService,
    private toast: ToastrService,
    private router: Router,
    private subscriber: SubscriberService,
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
   // this.getboxedit();
  if (this.id) {
    console.log('id.................', this.id);
    this.disabled = !this.disabled;
    this.editable = true;
    this.editflag = true;
   await  this.edit();
  //  this.createForm();
    this.getHeadend();
    this.getoperator();
 //   this.getboxedit();
    this.getCountry();
    this.getstate();
    this.getdistrict();
    this.getcity();
    this.getarea();
   
  }

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
  //   if (this.editcust.invalid) {
  //     console.log('Invalid value -----', invalid);
  //     window.alert('Please fill mandatory fields');
  //     return;
  //   }
  //   let result1 = this.editcust.value;
  //   console.log("result +++++++++++++ ", result1)
  // } 

 async addcustomer() {
  
    this.submit = true;
      this.editcust.value['custid']=this.id;
      let result = await this.subscriber.editsubcriberlist(this.editcust.value);
   //   let result = await this.subscriber.addsubscriber(this.AddCustForm.value);
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]["msg"]);
        this.router.navigate(["/pages/customer/cust-list"]);
      } else {
        this.toast.warning(result[0]["msg"]);
      }
    
    }
    
  async edit() {

    console.log('edit herer')
    this.editdata = await this.subscriber.editsubscriber({ custid: this.id });
    console.log('editdata .....', this.editdata);
    await this.createForm();

  }


  
  

  
  async getCountry($event = '') {
    this.count = await this.country.listcountry({ like: $event });
  }
  async getstate($event = '') {
    this.getstates = await this.country.liststate({ country_fk: this.editcust.value['country'], like: $event });
  }
  async getdistrict($event = '') {
    this.dist = await this.country.listdistrict({ state_fk: this.editcust.value['state'], like: $event });
  }
  async getcity($event = '') {
    this.citylist = await this.country.listcity({ district_id: this.editcust.value['district'] });
  }
  async getarea($event = '') {
    this.listarea = await this.country.listarea({ city_id: this.editcust.value['city'] });
  }

  changeclear(...data) {
    for (let i of data) {
      this.editcust.controls[i].setValue("");
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
    this.getoperatorlist = await this.subscriber.getoperator({ hdid: this.editcust.value['hdid'] })
    console.log("operator list ", this.getoperatorlist)

  }


  async getbox() {
    this.getboxlist = await this.subscriber.getbox({ hdid: this.editcust.value['hdid'] })
    console.log('getbox', this.getboxlist)
  }



  // async getboxedit(){

  //   this.getboxeditl=await this.subscriber.getboxedit({ hdid : this.editcust.value['hdid']})
  //   console.log("getboxlistedir",this.getboxeditl)
  // }

  createForm() {
    this.editcust = new FormGroup({
      userid: new FormControl(this.editdata?.userid || '',Validators.required),
      profileid: new FormControl(this.editdata?.profileid || '', Validators.required),
     // password: new FormControl('', Validators.required),
     //    stb_no: new FormControl(this.editdata?.boxno || '', Validators.required),
      hdid: new FormControl(this.editdata?.hdid || '', Validators.required),
      cafno: new FormControl(this.editdata?.cafno || '', Validators.required),
      fullname: new FormControl(this.editdata?.fullname || '', Validators.required),
      dob: new FormControl(this.editdata?.dob?.slice(0, 10)  || ''),
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
      bulk: new FormControl('')
    });


  }
  get ctrl() {
    return this.editcust.controls
  }
  get val() {
    return this.editcust.value
  }
}