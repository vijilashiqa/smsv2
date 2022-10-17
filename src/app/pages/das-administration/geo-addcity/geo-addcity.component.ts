import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from '../../_services';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngx-geo-addcity',
  templateUrl: './geo-addcity.component.html',
  styleUrls: ['./geo-addcity.component.scss']
})
export class GeoAddcityComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; cityform;
  item; 
  
  state: any = []; district: any = []; city;  @Input() title: string;
  editflag=false;listarea;keyword='name';count;editdata={};citylist;getstates;dist
  constructor(
    private country :CountryService,
    private toast: ToastrService, public activeModal: NgbActiveModal,) { }

async  ngOnInit() {
  this.createForm();
    this.getCountry();
    console.log('item in onint',this.item)
    if (this.item) {
      this.getstate()
      this.getdistrict()
      this.getcity()
      await this.createForm();
    }
  }
  async City() {
    this.submit = true;
    console.log('items============ in city', this.item,'form',this.cityform)
    if (!this.cityform.valid) {
      console.log('invalid---------------');
      
      return;
    }
    let method = this.item ? 'editcitygeo' : 'addcitygeo';
    console.log('item*******',this.item)
    if(this.item) this.val['city_id']=this.item['id']
    console.log('updatelist', method);
    let result = await this.country[method](this.cityform.value)
    console.log('result in add city fronennd',result);
    if (result && result['status'] == 1) {
      this.toast.success(result['msg']);
      this.close();
    } else {
      this.toast.warning(result['msg'])
    }
  }

  
  typeclearcountry(val = '1') {
    this.changeclear('stateid', 'districtid')
   
  }

  typeclearstate(val='1'){
 
    this.changeclear('districtid')


  }

  changeclear(...data) {
    for (let i of data) {
      this.cityform.controls[i].setValue('');
    }
  }


  async getCountry($event = '') {
    console.log('Country Event----', $event);
    this.count = await this.country.listcountry({like:$event});
    console.log('country', this.count);
  }
  async getstate($event = '') {
    console.log('get state  calling-----', this.val['countryid']);
    this.getstates = await this.country.liststate({ country_fk: this.val['countryid'],like:$event });
  }
  get val() {
    return this.cityform.value
  }
  async getdistrict($event = '') {
       console.log('dist', $event);
       console.log('get distric  calling-----', this.val['stateid']);
      this.dist = await this.country.listdistrict({ stateid: this.val['stateid'],like:$event });
      console.log('Get district data',this.dist);
      
  }
  async getcity($event = '') {
    console.log('city...........',$event);
    console.log('get distric  calling-----', this.val['districtid']);
      this.citylist = await this.country.listcity({ districtid: this.val['districtid'] });
    }
  close(){
    console.log('Status========= close----------');
    this.activeModal.close();
  }
  createForm() {
    this.cityform = new FormGroup({
      stateid: new FormControl(this.item ? this.item['state_fk'] : '', Validators.required),
      districtid: new FormControl(this.item ? this.item['district_fk'] : '', Validators.required),
      cityname: new FormControl(this.item ? this.item['city_name'] : '', Validators.required),
      countryid: new FormControl(this.item ? this.item['country_fk'] : '', Validators.required),
    });
  }
 
  

}
