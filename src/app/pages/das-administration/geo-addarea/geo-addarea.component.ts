import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { CountryService } from '../../_services';

@Component({
  selector: 'ngx-geo-addarea',
  templateUrl: './geo-addarea.component.html',
  styleUrls: ['./geo-addarea.component.scss']
})
export class GeoAddareaComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; Areaform;
  item;
  state: any = []; district: any = []; city: any = [];listpincode:any;
  pincode: any = []; area;count;listarea;getstates;dist;citylist;editflag=false;editdata={}
  @Input() title:string;
  keyword='name'
  constructor( private activemodel : NgbActiveModal,
    private country : CountryService,
    private toast: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();
    this.getCountry();

    if (this.item) {

      console.log('itemmm@@@@@@@@@',this.item)
      this.getstate();
      this.getdistrict();
      this.getcity();
      this.getpincode();
    }
  }
  
  async Area() {
    this.submit = true;
    if (!this.Areaform.valid) {
      return;
    }
    let method = this.item ? 'editareageo' : 'addareageo';
    if (this.item)this.Areaform.value['area_id'] = this.item['id']
    console.log('countyr_pk========',this.item)
      let result = await this.country[method](this.Areaform.value)
      if (result && result['status'] == 1) {
        this.toast.success(result['msg']);
        this.close();
      } else {
        this.toast.warning(result['msg'])
        console.log('add...', this.Areaform.value);
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
    return this.Areaform.value
  }
  async getdistrict($event = '') {
      //  console.log('dist', $event);
      //  console.log('get distric  calling-----', this.val['stateid']);
      this.dist = await this.country.listdistrict({ stateid: this.val['stateid'],like:$event });
      // console.log('Get district data',this.dist);
      
  }
  async getcity($event = '') {
    console.log('city...........',$event);
    console.log('get distric  calling-----', this.val['districtid']);
      this.citylist = await this.country.listcity({ district_id: this.val['districtid'] });
    }
  async getarea($event = '') {
  
      this.listarea = await this.country.listarea({ city_id:this.val['cityid'] });
     
  }  
  typeclearlcountry(val = "1") {
    this.changeclear("stateid", "districtid" , "cityid");
  }
  changeclear(...data) {
    for (let i of data) {
      this.Areaform.controls[i].setValue("");
    }
  }

  typeclearstate(val = "1") {
    this.changeclear( "districtid" , "cityid");
  }


  typecleardis(val ='1'){

    this.changeclear('cityid')
  }

  async getpincode($event=''){
  let result = await this.country.listpincodegeo({like:$event})
  console.log('pin--',result);
  
  this.listpincode = result[0]
  }
 
  
  close()
  {
    this.activemodel.close();
  }
  createForm() {
    this.Areaform = new FormGroup({
      stateid: new FormControl(this.item ? this.item['state_fk'] : '', Validators.required),
      districtid: new FormControl(this.item ? this.item['district_fk'] : '', Validators.required),
      cityid: new FormControl(this.item ? this.item['city_fk'] : '', Validators.required),
      countryid: new FormControl(this.item ? this.item['country_fk'] : '', Validators.required),
      areaname: new FormControl(this.item ? this.item['area_name'] : '', Validators.required),
      pincode: new FormControl(this.item ? this.item['pincode_fk'] : '', Validators.required),
    });
  }

}
