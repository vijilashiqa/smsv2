import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadendService,PagerService } from '../../_services';

@Component({
  selector: 'ngx-headendlist',
  templateUrl: './headendlist.component.html',
  styleUrls: ['./headendlist.component.scss']
})
export class HeadendlistComponent implements OnInit {

  listhead;data;count;result;
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;

  constructor(private headlist : HeadendService ,private route:Router,
    public pageservice: PagerService,
    ) { }

  async  ngOnInit() {
    
    await this.getList();

  }

  async getList(){
  this.listhead =await this.headlist.listheadend({});
  this.data = this.listhead[0];
  this.count = this.listhead[1].count
  console.log('listhead.....', this.listhead[0]);
  console.log('result[1]',this.count)
     this.setPage();
}

getlist(page) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.getList();
  }
}

setPage() {
  // console.log(this.data);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  this.pagedItems = this.data;
}
  
}
