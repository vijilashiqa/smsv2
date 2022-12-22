import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService } from '../../_services';
import { StbmanagementService } from '../../_services/stbmanagement.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DepositService } from '../../_services/deposit.service';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngx-adddeposit',
  templateUrl: './adddeposit.component.html',
  styleUrls: ['./adddeposit.component.scss']
})
export class AdddepositComponent implements OnInit {
  submit: boolean = false; depositForm; id; item; listhead; operatortype
  head; opt; imageURL: any; selectedfile: File = null; depositlist
  constructor(

    private headend: HeadendService,
    private domSanitizer: DomSanitizer,
    private stb: StbmanagementService,
    private deposits: DepositService,
    private route: Router,
    private toast: ToastrService,
  //  private aRoute: ActivatedRoute
  ) { }



  ngOnInit() {
    this.createForm();
    this.getHeadend();
    this.selectdeposit();


  }
  handleFile(file: FileList) {
    this.selectedfile = file.item(0);
    if (this.selectedfile) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageURL = this.domSanitizer.bypassSecurityTrustUrl(event.target.result)
      }
      reader.readAsDataURL(this.selectedfile);
    } else {
      this.imageURL = '';
    }
  }
  async getHeadend() {
    this.listhead = await this.headend.getHeadend({});
  }
  async selectdeposit() {
    this.depositlist = await this.deposits.selectdpositemode({})
    console.log("deposit list ", this.depositlist)
  }
  async getoperatortypef() {
    this.operatortype = await this.stb.getoperatortype({ usertype: this.depositForm.value["role"], hdid: this.depositForm.value["hdid"] });
    console.log("operator type ", this.operatortype);
  }

  async deposit() {
    this.submit = true;
    const invalid = [];
    const control = this.depositForm.controls
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.depositForm.invalid) {
      console.log('Invalid value -----', invalid);
      window.alert('Please fill mandatory fields');
      return;
    }
    let result = await this.deposits.adddeposite(this.depositForm.value);
    console.log('result ', result)
    if (result && result[0].err_code == 0) {
      this.toast.success(result[0]['msg']);
      this.route.navigate(['/pages/accounts/depositlist'])
    } else {
      this.toast.warning(result[0]['msg'])
      console.log('add...', this.depositForm.value);
    }

  }





  paytype() {



  }
  createForm() {
    this.depositForm = new FormGroup({
      hdid: new FormControl({ value: this.item ? this.item['headend_fk'] : '', disabled: this.id }, Validators.required),
      role: new FormControl({ value: this.item ? this.item['opt_type'] : '', disabled: this.id }, Validators.required),
      userid: new FormControl({ value: this.item ? this.item['opt_fk'] : '', disabled: this.id }, Validators.required),
      deposit_amount: new FormControl({ value: this.item ? this.item['depamt'] : '', disabled: this.id }, Validators.required),
      paymode: new FormControl({ value: this.item ? this.item['paymode'] : '', disabled: this.id }),
      note: new FormControl({ value: this.item ? this.item['remarks'] : '', disabled: this.id }),
      utr: new FormControl({ value: this.item ? this.item['utr'] : '', disabled: this.id }),
      upload: new FormControl(''),
      deposit_type: new FormControl({ value: this.item ? this.item['depsit_type'] : '', disabled: this.id })
    });
  }

}
