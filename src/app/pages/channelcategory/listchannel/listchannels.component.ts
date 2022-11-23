import { Component, OnInit } from '@angular/core';
import { BroadcasterService, HeadendService, PagerService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-channels',
  templateUrl: './listchannels.component.html',
  styleUrls: ['./listchannels.component.scss']
})
export class listChannelsComponent implements OnInit {
 broadcaster = ''; broadlist: any = [];genre='';genres;lang;channelForm; pager: any = {}; page: number = 1; 
 pagedItems: any = []; limit = 25;getcitylist;data;count;listchannel;listhead;headendl
  channel_name = '';submit: boolean; headend = ''; lcn_num = ''; language = '';broadcast
   channel_type = ''; 
  head: any = []; opt: any = [];
  channel_mode = '';
  
 channellist: any = [];
  constructor(
    private headService: HeadendService,
    private channelService: ChannelService,
    private pageservice :PagerService,
    private broadcasterService : BroadcasterService
  ) { }

   async ngOnInit() {
    await this.getheadend();
    await this.listlang();
    await this.listgenre();
    await this.initiallist();
  }
  async getheadend(){
    console.log('name', );
    this.headendl = await this.headService.getHeadend({});
    console.log('headendname',this.count);
  }
  async listlang(){
    console.log('name', );
    let result = await this.channelService.listlang({ hdid : this.headend});
    this.lang =result[0]
    console.log('langugae------',this.lang);
  }
  

  getchannel(){


  }

 
  getgenre(){

  }
  async listgenre(){
    console.log('name', );
    this.genres = await this.channelService.listgenre({  hdid : this.headend , langid : this.language });
    this.genres =this.genres[0]
    console.log('geneerrrr',this.genres);

  }
  async initiallist() {
    this.listchannel = await this.channelService.listchannel({index:(this.page - 1) * this.limit,
      limit:this.limit,
      id: 1,
      head: this.headend,
      bc: this.broadcaster,
      lcn: this.lcn_num,
      langid: this.language,
      genre: this.genre,
      chan_type: this.channel_type,
      channel_mode: this.channel_mode,
      channel: this.channel_name,});
    console.log('dfgvdg=====', this.listchannel)
    this.data = this.listchannel[0];
    this.count = this.listchannel[1].count;
    this.setPage();
}
  getlist(page) {
    var total = Math.ceil(this.count / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result['value'];
    if (result['result']) {
      this.initiallist();
    };
  }



  async Getbroadcasteredit($event='') {
   // console.log('gname---', this.channelForm.value['hdid']);
      this.broadcast = await this.broadcasterService.getbroadcaster({hdid : this.headend});
     console.log('result ********',this.broadcast)
    }

    

  setPage() {
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    this.pagedItems = this.data;
  }  

  getbroadcaster(){

  }

}
