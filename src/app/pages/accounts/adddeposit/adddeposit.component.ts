import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepositlistComponent } from '../depositlist/depositlist.component';

@Component({
  selector: 'ngx-adddeposit',
  templateUrl: './adddeposit.component.html',
  styleUrls: ['./adddeposit.component.scss']
})
export class AdddepositComponent implements OnInit {
  submit: boolean = false; depositForm; id; item;
  head; opt; imageURL: any; selectedfile: File = null;
  constructor() { }
  


  ngOnInit() {
    this.createForm();
    this.getheadend();
   
      this.getdeposit();
    
  }

  getdeposit() {
   
  }

  paytype() {
    
  }

  getoperator() {
   
  }

  getheadend() {
   
  }
  
  deposit(){}


  createForm() {
    this.depositForm = new FormGroup({
      headend: new FormControl({ value: this.item ? this.item['headend_fk'] : '', disabled: this.id }, Validators.required),
      operator_type: new FormControl({ value: this.item ? this.item['opt_type'] : '', disabled: this.id }, Validators.required),
      operator_name: new FormControl({ value: this.item ? this.item['opt_fk'] : '', disabled: this.id }, Validators.required),
      deposit_amount: new FormControl({ value: this.item ? this.item['depamt'] : '', disabled: this.id }, Validators.required),
      pay_type: new FormControl({ value: this.item ? this.item['depsit_type'] : '', disabled: this.id }),
      reason: new FormControl({ value: this.item ? this.item['remarks'] : '', disabled: this.id }),
      utr: new FormControl({ value: this.item ? this.item['utr'] : '', disabled: this.id }),
      upload: new FormControl(''),
    });
  }

}
