import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 import { CountryService } from '../../_services';
 import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-geo-addcountry',
  templateUrl: './geo-addcountry.component.html',
  styleUrls: ['./geo-addcountry.component.scss']
})
export class GeoAddcountryComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; countryForm;editdatas;
  item; result;id;result1;
  @Input() title: string;
   
  constructor(
     private country : CountryService,
      public activeModal: NgbActiveModal,
      private toast: ToastrService,
    ){}

  async ngOnInit(){
     
    this.createForm();
    console.log('Item----',this.item);
    // if(this.item){
    //   await this.editgenre()
    // }
    
  }
 async Country() {
    // this.submit = true;
    // console.log('items============',this.item)
    // if (!this.countryForm.valid) {
    //   return;
    // }
    let method = this.item ? 'editcountrygeo' : 'addcountrygeo'
    console.log('updatelist', method);
    if (this.item) this.countryForm.value['country_pk'] = this.item['country_pk']
    console.log('countyr_pk========',this.item)
    let result = await this.country[method](this.countryForm.value)
    if (result && result['status'] == 1) {
      this.toast.success(result['msg']);
      this.close();
    } else {
      this.toast.warning(result['msg'])
      // console.log('add...', this.countryForm.value);
    }
  }

close(){
  console.log('Status========= close----------');
    this.activeModal.close();
}
async createForm() {
    this.countryForm = new FormGroup({
      countryname: new FormControl(this.item? this.item['country_name']:'', Validators.required)
    });
  }
}
