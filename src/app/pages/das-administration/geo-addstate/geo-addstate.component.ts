import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService } from '../../_services';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-geo-addstate',
  templateUrl: './geo-addstate.component.html',
  styleUrls: ['./geo-addstate.component.scss']
})
export class GeoAddstateComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; stateForm; editflag = false;
  item; state; editable: boolean = false; editdata = {}
  initialValue; getstates; id; 
   @Input() title: string;
  count;
  constructor(
      private country: CountryService,   private toast: ToastrService,
     private headService: HeadendService,
     private activemodel : NgbActiveModal) { }
  async ngOnInit() {
    this.createForm();
    this.getCountry();
     if (this.item) {
      await this.createForm();
console.log('iteam ==========',this.item)
    
    }
  }

  async AddState() {
    this.submit = true;
    if (!this.stateForm.valid) {
      return;
    }
    let method = this.item ? 'editstategeo' : 'addstategeo';
    if (this.item) this.stateForm.value['state_pk'] = this.item['state_pk'];
      console.log('statte pk========',this.item)
      let result = await this.country[method](this.stateForm.value)
      if (result && result['status'] == 1) {
        this.toast.success(result['msg']);
        this.close();
      } else {
        this.toast.warning(result['msg'])
        console.log('add...', this.stateForm.value);
      }
    }
  async getCountry($event = '') {
    this.count = await this.country.listcountry({});
    console.log('country', this.count);
  }
  createForm() {
    this.stateForm = new FormGroup({
      countryname: new FormControl(this.item ? this.item['country_fk'] : '', Validators.required),
      statename: new FormControl(this.item ? this.item['state_name'] : '', Validators.required)
    });
  }

  
close(){

  this.activemodel.close();
}

}
