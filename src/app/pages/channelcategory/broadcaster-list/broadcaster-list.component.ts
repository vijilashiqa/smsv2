import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../_services';
import { BroadcasterService } from '../../_services/broadcaster.service';
@Component({
  selector: 'ngx-broadcaster-list',
  templateUrl: './broadcaster-list.component.html',
  styleUrls: ['./broadcaster-list.component.scss']
})
export class BroadcasterListComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;broadcastlist;data;count;
  constructor(
    private broadcaster: BroadcasterService,
    private pageservice :PagerService
  ) { }

 async ngOnInit() {
  await this.initiallist();
  }

  async initiallist() {
    this.broadcastlist = await this.broadcaster.listbroadcaster({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('area=====', this.broadcastlist)
    this.data = this.broadcastlist[0];
    this.count = this.broadcastlist[1].count;
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
