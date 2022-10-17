import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-surender-stb',
  templateUrl: './surender-stb.component.html',
  styleUrls: ['./surender-stb.component.scss']
})
export class SurenderStbComponent implements OnInit {

  public primaryColour = '#dd0031';
  public secondaryColour = '#006ddd';
  public loading = false;
  data; count = 0; search: boolean = false; model: any = []; head: any = [];
  pager: any = {}; page: number = 1; opt: any = []; stbdet: any = [];
  pagedItems: any = []; locitem: any = []; branchitem: any = [];
  vcdet: any = []; Custform; limit: number = 25;
  operator_name = ''; loc = ''; branch = ''; op_type = '';
  model_opt = ''; stbopt = ''; vc = ''; status = '';
  from_date = ''; to_date = ''; head_opt = ''; address = '';

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.initiallist();
    this.getheadend();
    this.getoperator();
  }
  initiallist() {
    // this.cust.surrendered_subscriber(
    //   {
    //     user_type: this.op_type,
    //     id: this.operator_name,
    //     index: (this.page - 1) * this.limit,
    //     limit: this.limit,
    //     model: this.model_opt,
    //     box: this.stbopt,
    //     vc: this.vc,
    //     status: this.status,
    //     loc: this.loc,
    //     branch: this.branch,
    //     start_date: this.from_date,
    //     end_date: this.to_date,
    //     head_id: this.head_opt,
    //     address: this.address,

    //   }
    
      // .subscribe(result => {
      //   if (result) {
      //     // console.log(result)
      //     this.data = result;
      //     this.count = this.data[1]['count'];
      //     this.setPage();
      //   }
      // });
  }

  getcustList(page) {
    var total = Math.ceil(this.count / this.limit);
    // let result = this.pageservice.pageValidator(this.page, page, total);
    // this.page = result['value'];
    // if (result['result']) {
    //   this.initiallist();
    // }
  }
  setPage() {
    // console.log(this.data);
    // this.pager = this.pageservice.getPager(this.data[1]['count'], this.page, this.limit);
    this.pagedItems = this.data[0];
    console.log(this.pagedItems)
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
    // this.user.getoperatorc({ op_type: this.op_type, head_id: this.head_opt }).subscribe(result => {
    //   if (result) {
    //     this.opt = result
    //   }
    // });
  }
  getlocation($event = "") {
    // ,head_id:this.head_opt
    // this.das.get_loc_for_opt({ id: this.operator_name, head_id: this.head_opt }).subscribe(result => {
    //   if (result) {
    //     this.locitem = result;
    //   }
    // })
  }

  getBranch($event = "") {
    let head = this.head_opt;
    let opt = this.operator_name;
    let lang = this.loc;
    if (lang != '') {
      // this.das.get_Branch_for_opt({ head_id: head, id: opt, loc_fk: lang }).subscribe(result => {
      //   // console.log(result)
      //   if (result) {
      //     this.branchitem = result;
      //   }
      // });
    }
  }

  createForm() {
    this.Custform = new FormGroup({
      subname_check: new FormControl(true),
      optname_check: new FormControl(),
      custid_check: new FormControl(),
      caf_check: new FormControl(true),
      status_check: new FormControl(true),
      cas_check: new FormControl(true),
      stb_check: new FormControl(true),
      vc_check: new FormControl(true),
      loc_check: new FormControl(),
      mob_check: new FormControl(true),
      act_check: new FormControl(true),
      exp_check: new FormControl(true),
      addr_check: new FormControl(true),
    });
  }
  
  
  //     .subscribe(result => {
  //       // console.log(result)
  //       if (result) {
  //         let tempdata = [], temp: any = result;
  //         for (var i = 0; i < temp.length; i++) {
  //           let parm = {};

  //           if (this.Custform.value['optname_check']) {
  //             parm['Operator Name'] = temp[i]['ufirst'] + ' ' + temp[i]['ulast'];
  //           }
  //           if (this.Custform.value['custid_check'] && this.role.getroleval() > 699) {
  //             parm['Customer ID'] = temp[i]['cust_id_pk'];
  //           }
  //           if (this.Custform.value['subname_check']) {
  //             let templ = temp[i]['last_name'] ? temp[i]['last_name'] : ''
  //             parm['Subscriber Name'] = temp[i]['first_name'] + ' ' + templ;
  //           }
  //           if (this.Custform.value['addr_check']) {
  //             parm['Address'] = temp[i]['billing_addr'];
  //           }
  //           if (this.Custform.value['caf_check']) {
  //             parm['CAF Number'] = temp[i]['caf_no'];
  //           }
  //           if (this.Custform.value['status_check']) {
  //             parm['Status'] = temp[i]['purchase_flg'] == 1 ? 'Active' : 'Inactive';
  //           }
  //           if (this.Custform.value['cas_check']) {
  //             parm['STB Type'] = temp[i]['model_name'];
  //           }
  //           if (this.Custform.value['stb_check']) {
  //             parm['STB Number'] = temp[i]['SNo'] + '';
  //           }
  //           if (this.Custform.value['vc_check']) {
  //             parm['VC Number'] = temp[i]['vc_no'] + '';
  //           }
  //           if (this.Custform.value['loc_check']) {
  //             parm['Location'] = temp[i]['loc_name'];
  //           }
  //           if (this.Custform.value['mob_check']) {
  //             parm['Mobile'] = temp[i]['mobile'] ? temp[i]['mobile'] + '' : '';
  //           }
  //           if (this.Custform.value['act_check']) {
  //             parm['Activate Date'] = temp[i]['active_date'] ? temp[i]['active_date'].substring(0, 10) : '';
  //           }
  //           if (this.Custform.value['exp_check']) {
  //             parm['Expiry Date'] = temp[i]['expiry_date'] ? temp[i]['expiry_date'].substring(0, 10) : '';
  //           }
  //           tempdata[i] = parm;
  //         }
  //         // const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
  //         // const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
  //         // JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
  //         // JSXLSX.writeFile(wb, 'Surrenderstb_report' + EXCEL_EXTENSION);
  //       }
  //     });
  // }

  toastalert(msg, status) {
    // const toast: Toast = {
    //   type: status == 1 ? 'success' : 'warning',
    //   title: status == 1 ? 'Success' : 'Failure',
    //   body: msg,
    //   timeout: 5000,
    //   showCloseButton: true,
    //   bodyOutputType: BodyOutputType.TrustedHtml,
    // };
    // this.alert.popAsync(toast);
  }
}
