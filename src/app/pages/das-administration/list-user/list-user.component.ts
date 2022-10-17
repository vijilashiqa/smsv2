import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
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
  page: number = 1; data: any = []; pager: any = {}; pagedItems: any = [];
  head: any = []; head_opt = ''; opt_type = ''; opt_name = ''; status = ''; opt: any = [];
  operator_name = ''; count = '';
  user: any; 
 

  constructor(
    //  private alert: ToasterService,
     private route: Router,
    //  private pageservice: PagerService,
    //  public role: RoleService,
   
    ) 
     {
    
   }

  ngOnInit(): void {
    this.initiallist();
    this.getheadend();
  }


  initiallist() {
    this.user.getadminuserList({
      index: (this.page - 1) * 10,
      limit: 10,
      head: this.head_opt,
      user_type: this.opt_type,
      id: this.opt,
      status: this.status,
    }).subscribe(result => {
      if (result) {
        this.data = result;
        this.count = result[1]['count'] || '';
        this.setPage();
      }
    })
  }
  list(page) {
    console.log(this.page)
    var total = Math.ceil(this.data[1]['count'] / 10);
    // let result = this.pageservice.pageValidator(this.page, page, total);
    // this.page = result['value'];
    // if (result['result']) {
    //   this.initiallist();
    // }
  }
  setPage() {
    // this.pager = this.pageservice.getPager(this.data[1]['count'], this.page, 10);
    // this.pagedItems = this.data[0];
  }
  getheadend() {
    // this.das.getheadend().subscribe(result => {
    //   if (result) {
    //     this.head = result;
    //   }
    // });
  }
  getoperator($event = "") {
    // console.log($event)
    // this.user.getoperatorc({ op_type: this.opt_type, head_id: this.head_opt }).subscribe(result => {
    //   if (result) {
    //     this.opt = result;
    //   }
    // });
  }
  Download() {
    // this.user.getadminuserList({
    //   head: this.head_opt,
    //   user_type: this.opt_type,
    //   id: this.opt,
    //   status: this.status,
    // })
      // .subscribe(result => {
      //   if (result) {
      //     let tempdata = [], temp: any = result;
      //     for (var i = 0; i < temp.length; i++) {
      //       let parm = {};

      //       parm['User ID'] = temp[i]['id'];

      //       parm['User Name'] = temp[i]['first_name'] + '' + temp[i]['last_name'];

      //       parm['User Login ID'] = temp[i]['username'];

      //       parm['Dashboard Amount'] = temp[i]['deposit_amt'];

      //       parm['Contact Number'] = temp[i]['mobie_no'];

      //       parm['Email ID'] = temp[i]['email1'];

      //       parm['Email ID'] = temp[i]['status'] == 1 ? 'Active' : 'Inactive';





      //       tempdata[i] = parm;
      //  
       }
        //   const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
        //   const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
        //   JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
        //   JSXLSX.writeFile(wb, 'Admin USer List' + EXCEL_EXTENSION);
        // }
    
      }