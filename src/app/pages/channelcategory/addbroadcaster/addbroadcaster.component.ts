import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService, HeadendService } from '../../_services';
import { BroadcasterService } from '../../_services/broadcaster.service';

@Component({
  selector: 'ngx-addbroadcaster',
  templateUrl: './addbroadcaster.component.html',
  styleUrls: ['./addbroadcaster.component.scss']
})
export class AddbroadcasterComponent implements OnInit {
  submit: boolean; broadcaster; listhead; item; editable: boolean = false; editdata: any;
  AddBroadcasterForm; citylist; listarea; id; count; getstates; dist; editflag = false;
  disabled = false;

  constructor(private headend: HeadendService,
    private country: CountryService,
    private broadcast: BroadcasterService,
    private route: Router,
    private toast: ToastrService,
    private aRoute: ActivatedRoute,) { }
  async addbroadcaster() {
    this.submit = true;
    const invalid = [];
    const control = this.AddBroadcasterForm.controls
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.AddBroadcasterForm.invalid) {
      console.log('Invalid value -----', invalid);
      // window.alert('Please fill mandatory fields');
      return;
    }
    let method = this.id ? 'editBroadcaster' : 'addbroadcaster'
    console.log('updatelist', method);
    if (this.id) this.AddBroadcasterForm.value['id'] = this.id
    let result = await this.broadcast[method](this.AddBroadcasterForm.value)
    if (result && result[0].err_code == 0) {
      this.toast.success(result[0]['msg']);
      this.route.navigate(['/pages/channelcategory/broadcaster-list'])
    } else {
      this.toast.warning(result[0]['msg'])
      console.log('add...', this.AddBroadcasterForm.value);

    }

  }
  async ngOnInit() {
    await this.createForm();
    await this.getCountry();
    await this.getHeadend();
//   await this.getarea();
    this.id = this.aRoute.snapshot.queryParams.id;
    if (this.id) {
      console.log('id.................', this.id);
      this.disabled = !this.disabled;
      this.editable = true
      this.editflag = true;
      await this.edit();
      this.clearValidation();
      await this.getCountry();
      await this.getstate();
      await this.getdistrict();
      await this.getcity();
      await this.getarea();
    }
  }


  clearValidation() {
    this.AddBroadcasterForm.get('password').clearValidators();
    this.AddBroadcasterForm.get('password').updateValueAndValidity();
  }
  async getHeadend($event = '') {

    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }

  async getCountry($event = '') {
    console.log('Country Event----', $event);
    this.count = await this.country.listcountry({ like: $event });
    console.log('country', this.count);
  }

  async getstate($event = '') {
    console.log('get state  calling-----', this.AddBroadcasterForm.value['countryid']);
    this.getstates = await this.country.liststate({ country_fk: this.AddBroadcasterForm.value['countryid'], like: $event });
  }
  async getdistrict($event = '') {
    console.log('dist', $event);
    console.log('get distric  calling-----', this.AddBroadcasterForm.value['stateid']);
    this.dist = await this.country.listdistrict({ stateid: this.AddBroadcasterForm.value['stateid'], like: $event });
    console.log('Get district data', this.dist);

  }
  async getcity($event = '') {
    console.log('city...........', $event);
    console.log('get distric  calling-----', this.AddBroadcasterForm.value['districtid']);
    this.citylist = await this.country.listcity({ district_id: this.AddBroadcasterForm.value['districtid'] });
  }
  async getarea($event = '') {
  
    this.listarea = await this.country.listarea({ city_id:this.AddBroadcasterForm.value['cityid'] });
    console.log('area', this.listarea)
   
}

  async edit() {
    console.log('edit herer', this.id)
    this.editdata = await this.broadcast.getbroadcasteredit({ id: this.id })
    console.log('editdata .....', this.editdata)
    await this.createForm();
  }
  changeclear(...data) {
    for (let i of data) {
      this.AddBroadcasterForm.controls[i].setValue("");
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

  createForm() {
    this.AddBroadcasterForm = new FormGroup({
      profileid: new FormControl(this.editdata?.profileid || '', Validators.required),
      password: new FormControl('', Validators.required),
      fullname: new FormControl(this.editdata?.fullname || '', Validators.required),
      mobile: new FormControl(this.editdata?.mobile || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      phoneno: new FormControl(this.editdata?.phoneno || '', Validators.required),
      email1: new FormControl(this.editdata?.email1 || '', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]{3,6}[.]{1}[a-z A-Z]{2,3}")]),
      email2: new FormControl(this.editdata?.email2 || '', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]{3,6}[.]{1}[a-z A-Z]{2,3}")]),
      districtid: new FormControl(this.editdata?.district || '', Validators.required),
      cityid: new FormControl(this.editdata?.city || '', Validators.required),
      area:new FormControl(this.editdata?.area || '',Validators.required),
      countryid: new FormControl(this.editdata?.country || '', Validators.required),
      hdid: new FormControl(this.editdata?.hdid || '', Validators.required),
      stateid: new FormControl(this.editdata?.state || '', Validators.required),
      pincode : new FormControl(this.editdata?.pincode || '', Validators.required),
      installation_addr: new FormControl(this.editdata?.installation_addr || '', Validators.required),
      descr: new FormControl(this.editdata?.descr || ''),
      status: new FormControl(true)
    });
  }
}
