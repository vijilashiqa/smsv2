import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HeadendService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-addlang',
  templateUrl: './addlang.component.html',
  styleUrls: ['./addlang.component.scss']
})
export class AddlangComponent implements OnInit {
  addlanguageForm; submit: boolean; @Input() title: string;item;listhead
  constructor(private activemodel: NgbActiveModal, private headend :HeadendService,
    private channel :ChannelService, private toast: ToastrService) { }

  async ngOnInit() {
    await this.createForm()
    await this.getHeadend();
    console.log('Item----', this.item);

  }
  async getHeadend($event = '') {

    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }
  async addchannel() {
    this.submit = true;
    if (this.addlanguageForm.invalid) {
      // window.alert('Please fill the mandatory fields')
      return;
    }
    let method = this.item ? 'editlanguage' : 'addlanguage';
    if (this.item) this.addlanguageForm.value['langid'] = this.item['langid'];
      console.log('language ========', this.item)
      let result = await this.channel[method](this.addlanguageForm.value)
      if (result && result['err_code'] == 1) {
        this.toast.success(result['msg']);
        this.close();
      } else {
        this.toast.warning(result['msg'])
        console.log('add...', this.addlanguageForm.value);
      } 
  }
  close() {
    this.activemodel.close();
  }
  createForm() {
    this.addlanguageForm = new FormGroup({
      hdid:new FormControl(this.item? this.item['hdid'] : '', Validators.required),
      langname: new FormControl(this.item? this.item['langname']:'', Validators.required),
      activestatus: new FormControl(true, Validators.required),
    });
  }
}
