import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
 import { HeadendService } from '../../_services';
import { HsnService } from '../../_services/hsn.service';
@Component({
  selector: 'ngx-addhsn',
  templateUrl: './addhsn.component.html',
  styleUrls: ['./addhsn.component.scss']
})
export class AddhsnComponent implements OnInit {
  AddhsnForm;
  modalHeader: string;
  submit: boolean = false;
  item; listhdcas
  state: any = []; district: any = []; city: any = []; listpincode: any; listhead; listmake; getstbtypeg;
  pincode: any = []; area; count; listarea; getstates; dist; citylist; editflag = false; editdata = {}
  @Input() title: string;
  keyword = 'name'
  constructor(private activemodel: NgbActiveModal,
    private headend: HeadendService,
    private hsn :HsnService,
    private route: Router,
    private toast: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();
    this.getHeadend();

  }

  async getHeadend($event = '') {

    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }

  async addhsn() {
    this.submit = true;
    if(this.AddhsnForm.invalid){
//this.toast.error('Please fill mandatory fields')
      return
    }
    let method = this.item ? 'edithsn' : 'addhsn';
    if (this.item) this.AddhsnForm.value['hsn_id'] = this.item['hsn_id']
    let result = await this.hsn[method](this.AddhsnForm.value)
    if(result[0]['err_code'] == 0){
      this.toast.success(result[0]['msg'])
      this.close();
      this.route.navigate(['/pages/inventory/hsnlist'])
    }else{
      this.toast.warning(result[0]['msg'])
    }
  }
  
  close() {
    this.activemodel.close();
  }
  createForm() {
    this.AddhsnForm = new FormGroup({
      hdid:new FormControl(this.item ? this.item['hdid'] : '', Validators.required),
      hsn_num: new FormControl(this.item ? this.item['hsn_num'] : '', Validators.required),
      hsn_name: new FormControl(this.item ? this.item['hsn_name'] : '', Validators.required),
      status: new FormControl(true),
    });
  }

}
