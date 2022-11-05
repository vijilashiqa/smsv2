import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService, PagerService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-channels',
  templateUrl: './listchannels.component.html',
  styleUrls: ['./listchannels.component.scss']
})
export class listChannelsComponent implements OnInit {
 broadcaster = ''; broadlist: any = [];genre='';genres;lang;channelForm; pager: any = {}; page: number = 1; 
 pagedItems: any = []; limit = 25;getcitylist;data;count;listchannel
  channel_name = '';submit: boolean;
  constructor(
    private headService: HeadendService,
    private channelService: ChannelService,
    private pageservice :PagerService
  ) { }

   async ngOnInit() {
    await this.getheadend();
    await this.listlang();
    await this.listgenre();
    await this.initiallist();
  }
  async getheadend(){
    console.log('name', );
    this.count = await this.headService.getHeadend({});
    console.log('headendname',this.count);
  }
  async listlang(){
    console.log('name', );
    let result = await this.channelService.listlang({});
    this.lang =result[0]
    console.log('langugae------',this.lang);
  }
  
  async listgenre(){
    console.log('name', );
    this.genres = await this.channelService.listgenre({});
    this.genres =this.genres[0]
    console.log('geneerrrr',this.genres);

  }
  async initiallist() {
    this.listchannel = await this.channelService.listchannel({index:(this.page - 1) * this.limit,limit:this.limit});
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
  setPage() {
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    this.pagedItems = this.data;
  }  

}
