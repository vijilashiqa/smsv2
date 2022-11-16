import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 import {  HeadendService, VendorService } from '../../_services';
 import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'ngx-createmake',
  templateUrl: './Addvendor.component.html',
  styleUrls: ['./Addvendor.component.scss']
})
export class AddvendorComponent implements OnInit {
  modalHeader: string;listhead
  submit: boolean = false; createmakeForm;
  datas; result;
  @Input() title: string;
   
  constructor(
   
      public activeModal: NgbActiveModal,
      private toast: ToastrService,
      private vendor : VendorService,
      private headend :HeadendService
    ){}

   ngOnInit(){
        this.createForm();
        this.getHeadend();
        console.log('Item----',this.datas);
  }

 

  async getHeadend($event = '') {
    console.log('event',event)
    this.listhead = await this.headend.getHeadend({ })
    console.log(this.listhead)
  }

 async addmake() {
    this.submit = true;
     if (!this.createmakeForm.valid) {
      return;
    }
    let method = this.datas ? 'editvendor' : 'addvendor'
    if (this.datas) this.createmakeForm.value['vendorid'] = this.datas['vendorid']
     let result = await this.vendor[method](this.createmakeForm.value)
    if (result && result[0]['err_code'] == '0') {
      this.toast.success(result[0]['msg']);
      this.close();
    } else {
      this.toast.warning(result[0]['msg'])
      // this.close();
    }
  }

close(){

    this.activeModal.close();
}
async createForm() {
    this.createmakeForm = new FormGroup({
      vendor_name: new FormControl(this.datas? this.datas['vendor_name']:'', Validators.required),
      hdid: new FormControl(this.datas? this.datas['hdid']:'', Validators.required),
      status: new FormControl(true),
    });
  }
}

