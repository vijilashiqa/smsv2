import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagerService } from '../../_services';
import { RoleusersevicesService } from '../../_services/roleusersevices.service';

@Component({
  selector: 'ngx-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfileComponent implements OnInit {
  data: any = []; pager: any = {}; 
  head: any = []; head_opt = ''; opt_type = ''; opt_name = ''; status = ''; opt: any = [];
  operator_name = '';   user: any; getuser
  page: number = 1; pagedItems: any = []; limit = 25;getcitylist;count;

  constructor(
     private role: RoleusersevicesService,
     private pageservice: PagerService,  
     private router: Router,
    ) 
     { }

  ngOnInit(): void {
    this.initiallist();
  }
  async initiallist() {
    this.getuser = await this.role.listrole({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('gestuser*****', this.getuser)
    this.data = this.getuser[0];
    this.count = this.getuser[1].count;
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


  edit(item) {
    localStorage.setItem('profile_e', JSON.stringify(item));
    this.router.navigate(['/pages/das-administration/edit-profile']);
  }
}