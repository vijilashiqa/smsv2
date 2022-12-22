import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../_services';

@Component({
  selector: 'ngx-geo-adddistrict',
  templateUrl: './geo-adddistrict.component.html',
  styleUrls: ['./geo-adddistrict.component.scss']
})
export class GeoAdddistrictComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; districtForm; getstates; count; editflag = false; dist;
  item; editdata = {}
  state: any = []; district;editdatas;
  @Input() title: string;
  constructor(
    private toast: ToastrService,
    public activeModal: NgbActiveModal,
    private country: CountryService,) { }

  async ngOnInit() {
    this.createForm();
    this.getCountry();
    console.log('Item----', this.item);
    if (this.item) {
      this.getstate()
      await this.createForm();
    }
  }

  async District() {
    this.submit = true;
    // console.log('items============ in district', this.item)
    if (!this.districtForm.valid) {
      return;
    }
    let method = this.item ? 'editDistrictgeo' : 'addDistrictgeo'
    console.log('items============ in district in edit**', this.item)
    if(this.item) this.val['district_pk'] = this.item['district_pk']
    let result = await this.country[method](this.districtForm.value)
    console.log('add distric###########', result)
    if (result && result['status'] == 1) {
      this.toast.success(result['msg']);
      this.close();
    } else {
      this.toast.warning(result['msg'])
      console.log('add...', this.districtForm.value);
    }
  }
  close() {
    //console.log('Status========= close----------');
    this.activeModal.close();
  }

  typecleardist(val = '1') {
    this.changeclear('state_fk')
   
  }


  changeclear(...data) {
    for (let i of data) {
      this.districtForm.controls[i].setValue('');
    }
  }



  async getCountry($event = '') {
    console.log('Country Event----', $event);
    this.count = await this.country.listcountry({like:$event});
    console.log('country', this.count);
  }
  async getstate($event = '') {
    //console.log('get state  calling-----', this.val['countryid']);
    this.getstates = await this.country.liststate({ country_fk: this.val['country_fk'],like:$event });
  }
  get val() {
    return this.districtForm.value
  }

  createForm() {
    this.districtForm = new FormGroup({
      country_fk: new FormControl(this.item ? this.item['country_fk'] : '', Validators.required),
      state_fk: new FormControl(this.item ? this.item['state_fk'] : '', Validators.required),
      district_name: new FormControl(this.item ? this.item['district_name'] : '', [Validators.required])
    });
  }
  
}
