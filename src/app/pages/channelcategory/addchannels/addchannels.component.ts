import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService } from '../../_services';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { BroadcasterService } from '../../_services/broadcaster.service';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-addchannels',
  templateUrl: './addchannels.component.html',
  styleUrls: ['./addchannels.component.scss']
})
export class AddchannelsComponent implements OnInit {
  channelForm; submit: boolean; count; id; lang; genres; headend;broadcasters;
  cou;editable: boolean = false; editdata = {}; editflag = false;
  constructor(
    private headService: HeadendService,
    private channelService: ChannelService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private broadcasterService:BroadcasterService
  ) { }

  async ngOnInit() {
    console.log('init');
    
     this.createForm();
     this.getheadend();
//this.listlang();
     this.listgenre();
     this.Getbroadcasteredit();
     this.id = this.aRoute.snapshot.queryParams['id'];
    if (this.id) {
      this.editable = true
      this.editflag = true;
     await this.edit();
     await this.createForm();
    await  this.Getbroadcasteredit();
    await this.listlang();
    await this.listgenre();
     }
  }
  async getheadend($event='') {
    this.count = await this.headService.getHeadend({});
  }
  async listlang($event='') {

    let result = await this.channelService.listlang({hdid: this.val['hdid'] });
    this.lang = result[0]
   
  }

 async Getbroadcasteredit($event='') {
  console.log('gname---', this.channelForm.value['hdid']);
   let result = await this.broadcasterService.getbroadcaster({hdid: this.val['hdid']});
   this.cou =result
  }

  async listgenre($event='') {  
      this.genres = await this.channelService.selectgenere({ hdid: this.val['hdid'] , langid : this.val['langid'] });
     console.log('list genre',this.genres )
  }



  typeclearheadend(val = '1') {
    this.changeclear( 'genreid', 'langid', 'bcid')
   
  }


  typeclearlang(val ='1')
{
this.changeclear('genreid')

}
  changeclear(...data) {
    for (let i of data) {
      this.channelForm.controls[i].setValue('');
    }
  }




  async addchannel() {
    {
      this.submit = true;
      console.log('add...', this.val);
      const invalid = [];
      const control = this.channelForm.controls
      for (const name in control) {
        if (control[name].invalid) {
          invalid.push(name);
        }
      }
      if (this.channelForm.invalid ) {
        // window.alert('Please fill mandatory fields');
        return;
      }
      console.log('add...', this.val);
      let method = this.id ? 'editchannel' : 'addchannel'
      console.log('updatelist', method);
      if (this.id) this.channelForm.value['id'] = this.id
      let result = await this.channelService[method](this.channelForm.value)
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]['msg']);
        this.route.navigate(['/pages/channelcategory/listchannel'])
      } else {
        this.toast.warning(result[0]['msg'])
        console.log('add...', this.val);
      }
      }
  }
  get ctrl() {
    return this.channelForm.controls
  }
  get val() {
    return this.channelForm.value
  }

  async edit(){
    console.log('edit herer')
    this.editdata = await this.channelService.getchanneledit({ id: this.id });
    console.log('editdata .....', this.editdata)
  
  }

  createForm() {
    this.channelForm = new FormGroup({
      channame: new FormControl(this.editdata['channame'] || '', Validators.required),
      chanmode: new FormControl(this.editdata['chanmode'] || '', Validators.required),
      langid: new FormControl(this.editdata['langid'] || '', Validators.required),
      genreid: new FormControl(this.editdata['genreid'] || '', Validators.required),
      bcid: new FormControl(this.editdata['bcid'] || '', Validators.required),
      chantype: new FormControl(this.editdata['chantype'] || '', Validators.required),
      hdid: new FormControl(this.editdata['hdid'] || '', Validators.required),
      chanlcm: new FormControl(this.editdata['chanlcm'] || '', Validators.required),
      alacarte: new FormControl(true),
      status: new FormControl(true)
    });

  }
}
