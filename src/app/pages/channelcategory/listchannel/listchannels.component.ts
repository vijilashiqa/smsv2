import { Component, OnInit } from '@angular/core';
import { BroadcasterService, HeadendService, PagerService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-channels',
  templateUrl: './listchannels.component.html',
  styleUrls: ['./listchannels.component.scss']
})
export class listChannelsComponent implements OnInit {
  broadcaster = ''; broadlist: any = []; genre = ''; listgener; lang; channelForm; pager: any = {}; page: number = 1;
  pagedItems: any = []; limit = 25; getcitylist; data; count; listchannel; listhead; headendl; selectchannel
  channel_name = ''; submit: boolean; headend = ''; lcn_num = ''; language = ''; broadcast
  channel_type = '';
  head: any = []; opt: any = [];
  channel_mode = '';

  channellist: any = [];
  constructor(
    private headService: HeadendService,
    private channelService: ChannelService,
    private pageservice: PagerService,
    private broadcasterService: BroadcasterService
  ) { }

  async ngOnInit() {
    await this.initiallist();
    await this.getheadend();
    await this.listlang();
    await this.listgenre();
    await this.selectchanname()

  }
  async getheadend() {
    console.log('name',);
    this.headendl = await this.headService.getHeadend({});
    console.log('headendname', this.headendl);
  }
  async listlang() {
    console.log('name',);
    let result = await this.channelService.listlang({ hdid: this.headend });
    this.lang = result[0]
    console.log('langugae------', this.lang);
  }

  async listgenre() {
    console.log('name',);
    this.listgener = await this.channelService.selectgenere({ hdid: this.headend, langid: this.language });
    console.log('geneerrrr', this.listgener);
  }


  async selectchanname() {
    this.selectchannel = await this.channelService.selectchanname({ hdid: this.headend })
    console.log("select channel", this.selectchannel)

  }
  async initiallist() {
    this.listchannel = await this.channelService.listchannel({
      index: (this.page - 1) * this.limit,
      limit: this.limit,
      hdid: this.headend,
      bcid: this.broadcaster,
      chanlcm: this.lcn_num,
      langid: this.language,
      genreid: this.genre,
      chantype: this.channel_type,
      chanmode: this.channel_mode,
      chanid: this.channel_name,
    });
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
  async Getbroadcasteredit($event = '') {
    this.broadcast = await this.broadcasterService.getbroadcaster({ hdid: this.headend });
   // console.log('result ********', this.broadcast)
  }
  setPage() {
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    this.pagedItems = this.data;
  }


}
