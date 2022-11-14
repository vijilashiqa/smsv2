import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import { PagerService } from '../../_services';
import { RoleusersevicesService } from '../../_services/roleusersevices.service';
// import { userService, PagerService, RoleService, Das_Admin, } from '../../_service/index';
@Component({
  selector: 'ngx-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  // public get pageservice(): PagerService {
  // //   return this._pageservice;
  // // }
  // public set pageservice(value: PagerService) {
  //   this._pageservice = value;
  // }
 data: any = []; pager: any = {}; 
  head: any = []; head_opt = ''; opt_type = ''; opt_name = ''; status = ''; opt: any = [];
  operator_name = '';   user: any; getuser
  page: number = 1; pagedItems: any = []; limit = 25;getcitylist;count;

  constructor(
    //  private alert: ToasterService,
     private role: RoleusersevicesService,
     private pageservice: PagerService,
    //  public role: RoleService,
   
    ) 
     {
    
   }

   ngOnInit(): void {
    this.initiallist();
  }
  async initiallist() {
    this.getuser = await this.role.listrole({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('dfgvdg=====', this.getuser)
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

}