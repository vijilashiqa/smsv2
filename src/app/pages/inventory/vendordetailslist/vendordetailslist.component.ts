import { Component, OnInit } from '@angular/core';
import { PagerService, VendorService } from '../../_services';

@Component({
  selector: 'ngx-businesslist',
  templateUrl: './vendordetailslist.component.html',
  styleUrls: ['./vendordetailslist.component.scss']
})
export class vendordetailslistComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;broadcastlist;data;count;
  constructor(
    private vendorservices: VendorService,
    private pageservice :PagerService
  ) { }

 async ngOnInit() {
  await this.initiallist();
  }

  async initiallist() {
    this.broadcastlist = await this.vendorservices.listvendordetails({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('area=====', this.broadcastlist)
    this.data = this.broadcastlist[0];
    this.count = this.broadcastlist[1].count;
    this.setPage();

  }
  Addvendor(){}

  
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