import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CountryService, HeadendService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-addgenre',
  templateUrl: './addgenre.component.html',
  styleUrls: ['./addgenre.component.scss']
})
export class AddgenreComponent implements OnInit {
  addgenerForm; submit: boolean = false; modalHeader: string; listlang; data;
  boolean = false; stateForm; editflag = false;
  item; state; editable: boolean = false; editdata ; listhead;
  initialValue; getstates; id;
  @Input() title: string;
  count;
  constructor(private toast: ToastrService,
    private channel: ChannelService,
    private route: Router,
    private headend: HeadendService,
    private activemodel: NgbActiveModal) { }

  async ngOnInit() {
    console.log('Item----', this.item);
    await this.createForm();
    if (this.item) await this.getlang();
    await this.getHeadend();

  }

  async getlang($event = '') {
    console.log("evenrnmvbn", $event)
       this.listlang = await this.channel.listlang({ hdid: this.addgenerForm.value['hdid'] });
      console.log('lang List', this.listlang)
      this.data = this.listlang[0];
   }


  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }
  async Addgenre() {
    // this.submit = true;
    // if (this.addgenerForm.invalid) {
    //   // window.alert('Please fill the mandatory fields')
    //   return;
    // }
    let method = this.item ? 'editgenre' : 'addgenre';
    if (this.item) this.addgenerForm.value['genreid'] = this.item['genreid'];
    console.log('Genre addd ========', this.item)
    let result = await this.channel[method](this.addgenerForm.value)
    if (result && result[0].err_code == 0) {
      this.toast.success(result[0]['msg']);
     this.close();
    } else {
      this.toast.warning(result[0]['msg'])
      console.log('add...', this.addgenerForm.value);
    
    }
  }
  close() {

    this.activemodel.close();
  }

  typeClear(val = '1') {
    this.changeclear('langid')
       
      }



      
  changeclear(...data) {
    for (let i of data) {
      this.addgenerForm.controls[i].setValue('');
    }
  }

  createForm() {
    this.addgenerForm = new FormGroup({
      hdid: new FormControl(this.item ? this.item['hdid'] : '', Validators.required),
      langid: new FormControl(this.item ? this.item['langid'] : '', Validators.required),
      genrename: new FormControl(this.item ? this.item['genrename'] : '', Validators.required)
    });
  }








}
