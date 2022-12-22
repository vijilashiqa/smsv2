import { Component, OnInit } from '@angular/core';
import { CountryService, HeadendService } from '../../_services/index';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'ngx-headendadd',
  templateUrl: './headendadd.component.html',
  styleUrls: ['./headendadd.component.scss'],
})
export class HeadendaddComponent implements OnInit {
  submit: boolean; AddheadendForm; editflag = false;
  state: any = []; district: any = []; city: any = []; editable: boolean = false; editdata = {}
  pincode: any = []; area: any = []; headend;
  keyword = 'name'; value = "country_pk"; citylist; listarea; id; count; getstates; dist;
  initialValue; updateform;
  constructor(private country: CountryService,
    private headService: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {
    this.createForm();
    this.getCountry();
    this.id = this.aRoute.snapshot.queryParams.id;
    if (this.id) {
      this.editable = true
      this.editflag = true;
      await this.edit();
      await this.createForm();
      await this.getCountry();
      await this.getstate();
      await this.getdistrict();
      await this.getcity();
      await this.getarea();
    }
  }
  async AddHeadend() {
    this.submit = true;
    console.log('add...', this.val);
    const invalid = [];
    const control = this.ctrl
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.AddheadendForm.invalid) {
      console.log('Invalid value -----', invalid);
      window.alert('Please fill mandatory fields');
      return;
    }
    console.log('add...', this.val);
    let method = this.id ? 'editheadend' : 'addheadend'
    console.log('updatelist', method);
    if (this.id) this.AddheadendForm.value['id'] = this.id
    let result = await this.headService[method](this.AddheadendForm.value)
    if (result && result[0].err_code == 0) {
      this.toast.success(result[0]['msg']);
      this.route.navigate(['/pages/das-administration/headendlist'])
    } else {
      this.toast.warning(result[0]['msg'])
      console.log('add...', this.val);
    }
  }

  async getCountry($event = '') {
    console.log('Country Event----', $event);
    this.count = await this.country.listcountry({ like: $event });
    console.log('country', this.count);
  }

  async getstate($event = '') {
    console.log('get state  calling-----', this.val['countryid']);
    this.getstates = await this.country.liststate({ country_fk: this.val['countryid'], like: $event });
  }


  async getdistrict($event = '') {
    console.log('dist', $event);
    console.log('get distric  calling-----', this.val['stateid']);
    this.dist = await this.country.listdistrict({ state_fk: this.val['stateid'], like: $event });
    console.log('Get district data', this.dist);

  }
  async getcity($event = '') {
    console.log('city...........', $event);
    console.log('get distric  calling-----', this.val['districtid']);
    this.citylist = await this.country.listcity({ district_id: this.val['districtid'] });
    console.log('city *******', this.citylist)
  }
  async getarea($event = '') {
    this.listarea = await this.country.listarea({ city_id: this.val['cityid'] });
    console.log('ares *******', this.listarea)
  }

  typeClear(val = '1') {
    this.changeclear('stateid', 'areaid', 'districtid', 'cityid')
  }
  typeClearstate(val = '1') {
    this.changeclear('areaid', 'districtid', 'cityid')
  }
  typeClearcity(val = '1') {
    this.changeclear('areaid')
  }
  typedist(val = '1') {
    this.changeclear('areaid', 'cityid')
  }
  changeclear(...data) {
    for (let i of data) {
      this.AddheadendForm.controls[i].setValue('');
    }
  }

  async edit() {
    console.log('edit herer')
    this.editdata = await this.headService.getheadendedit({ id: this.id });
    console.log('editdata .....', this.editdata)
  }
  createForm() {
    this.AddheadendForm = this.fb.group({
      hdname: new FormControl(this.editdata['hdname'] || '', Validators.required),
      headendid: new FormControl(this.editdata['hdlid'] || '', Validators.required),
      mobileno: new FormControl(this.editdata['mobileno'] || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      countryid: new FormControl(this.editdata['countryid'], Validators.required),
      pincode: new FormControl(this.editdata['pincode'] || '', [Validators.required]),
      stateid: new FormControl(this.editdata['stateid'], Validators.required),
      areaid: new FormControl(this.editdata['areaid'], Validators.required),
      districtid: new FormControl(this.editdata['districtid'], Validators.required),
      cityid: new FormControl(this.editdata['cityid'], Validators.required),
      postpaiddate: new FormControl(this.editdata['postpaiddate'] || '', [Validators.required, Validators.max(31), Validators.min(1)]),
      crop_addr: new FormControl(this.editdata['crop_addr'] || '', Validators.required),
      comm_addr: new FormControl(this.editdata['comm_addr'] || '', Validators.required),
      email: new FormControl(this.editdata['email'] || '', [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
      descr: new FormControl(this.editdata['descr']),
      status: new FormControl(this.editdata['status'] || true),
      sgst: new FormControl(this.editdata['sgst'] || '', Validators.required),
      cgst: new FormControl(this.editdata['cgst'] || '', Validators.required),
      igst: new FormControl(this.editdata['igst'] || '', Validators.required),
      gst: new FormControl(this.editdata['gst'] || '', Validators.required),
      Logo: new FormControl(this.editdata['Logo'] || ''),
      com_invid: new FormControl(this.editdata['com_invid'] || '', Validators.required),
      postpaidtime: new FormControl(this.editdata['postpaidtime'] || '', Validators.required),
    });

  }
  get ctrl() {
    return this.AddheadendForm.controls
  }
  get val() {
    return this.AddheadendForm.value
  }

  async getinitial(fname, data, id) {
    let [result] = data.filter(x => x.id == id)
    this.AddheadendForm.get(fname).patchValue(result)
  }


}
