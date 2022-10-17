import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService, HeadendService, VendorService } from '../../_services';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BoxtypeService } from '../../_services/boxtype.service';
@Component({
  selector: 'ngx-addstbtype',
  templateUrl: './addstbtype.component.html',
  styleUrls: ['./addstbtype.component.scss']
})
export class AddstbtypeComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; addstbtypeForm; editflag = false;
  item; state; editable: boolean = false; editdata = {};listhead
  initialValue; getstates; id; 
   @Input() title: string;
  count;
  constructor(
      private country: CountryService,   private toast: ToastrService,
     private headend : HeadendService,
     private vendorservices : VendorService,
     private boxtype :BoxtypeService,
     private activemodel : NgbActiveModal) { }
  async ngOnInit() {
    this.createForm();
    this.getHeadend();
     if (this.item) {
      await this.createForm();
    
    }
  }
  async getHeadend($event = '') {

    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }
  async AddState() {
    // this.submit = true;
    // if (this.addstbtypeForm.invalid) {
    //   return;
    // }
    let method = this.item ? 'editboxtype' : 'addboxtype';
    if (this.item) this.addstbtypeForm.value['boxtypeid'] = this.item['boxtypeid'];
      let result = await this.boxtype[method](this.addstbtypeForm.value)
      if (result && result[0]['err_code'] == 0) {
        this.toast.success(result[0]['msg']);
        this.close();
      } else {
        this.toast.warning(result[0]['msg'])
        // this.close();
      }
    }

  createForm() {
    this.addstbtypeForm = new FormGroup({
      hdid: new FormControl(this.item ? this.item['hdid'] : '', Validators.required),
      boxtypename: new FormControl(this.item ? this.item['boxtypename'] : '', Validators.required),
      status: new FormControl(true)
    });
  }

  
close(){

  this.activemodel.close();
}

}

