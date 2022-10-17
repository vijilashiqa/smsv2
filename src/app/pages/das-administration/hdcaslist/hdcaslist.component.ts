import { Component, OnInit } from '@angular/core';
import { HeadendService, PagerService } from '../../_services';

@Component({
  selector: 'ngx-hdcaslist',
  templateUrl: './hdcaslist.component.html',
  styleUrls: ['./hdcaslist.component.scss']
})
export class HdcaslistComponent implements OnInit {
  data;gethdcas;

  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;getcitylist;count;
  constructor(private pageservice: PagerService,private headend :HeadendService ) { }

  ngOnInit(): void {
    this.initiallist();
  }
  async initiallist() {
    this.gethdcas = await this.headend.listHdcas({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('dfgvdg=====', this.gethdcas)
    this.data = this.gethdcas[0];
    this.count = this.gethdcas[1].count;
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
