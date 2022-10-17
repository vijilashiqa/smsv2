import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-cust-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.scss']
})
export class CustListComponent implements OnInit {

  public primaryColour = '#dd0031';
  public secondaryColour = '#006ddd';
  public loading = false;
  data; count = 0; search: boolean = false; model: any = []; head: any = [];
  pager: any = {}; page: number = 1; opt: any = []; stbdet: any = [];
  pagedItems: any = []; locitem: any = []; branchitem: any = [];
  vcdet: any = []; Custform; limit: number = 25;
  operator_name = ''; loc = ''; branch = ''; op_type = '';
  model_opt = ''; stbopt = ''; vc = ''; status = ''; to_cdate = '';
  from_date = ''; to_date = ''; head_opt = ''; address = '';
  pack: any = []; pack_type = ''; package = ''; from_cdate = '';
  cas:any=[];castype='';

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.initiallist();
    this.getheadend();
    this.getoperator();
    this.getModel();
  }
  initiallist() 
  {
    // this.cust.getcustList(
      {
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
    //     pack_type: this.pack_type,
    //     package: this.package,
    //     c_times: this.from_cdate,
    //     c_timee: this.to_cdate,
    //     cas:this.castype,

     }
    // )
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
  }

  Edit(item) {
    localStorage.setItem('cust_data', JSON.stringify(item));
    // this.router.navigate(['/pages/cutomer/edit_cust'])
  }

  view(item) {
    localStorage.setItem('cust_data', JSON.stringify(item));
    // console.log( JSON.stringify(item))
    // this.router.navigate(['/pages/cutomer/view_cust'])
  }

  renew(item) {
    localStorage.setItem('cust_data', JSON.stringify(item));
    // this.router.navigate(['/pages/cutomer/renew_cust'])
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
    //     console.log(result)
    //   }
    // });
  }
  getlocation($event = "") {
    // ,head_id:this.head_opt
    // this.das.get_loc_for_opt({ id: this.operator_name, head_id: this.head_opt }).subscribe(result => {
    //   if (result) {
    //     this.locitem = result;
    //     console.log(result)
    //   }
    // })
  }

  getBranch($event = "") {
    let head = this.head_opt;
    let opt = this.operator_name;
    let lang = this.loc;
    if (lang != '') {
      // this.das.get_Branch_for_opt({ head_id: head, id: opt, loc_fk: lang }).subscribe(result => {
      //   console.log(result)
      //   if (result) {
      //     this.branchitem = result;
      //   }
      // });
    }
  }
   getcas() {

   
      // this.das.getcashead({ head: this.head_opt }).subscribe(result => {
      //   if (result) {
      //     this.cas = result;
      //   }
      // });
 
  }

  getModel() {
    // this.stb.getModel().subscribe(result => {
    //   if (result) {
    //     this.model = result;
    //   }
    // });
  }

  getSTB($event = '') {
    let user = this.operator_name,
      model = this.model_opt;
    // console.log('qdewrw',$event)
    // this.stb.getstb({ id: user, model: model, like: $event }).subscribe(result => {
    //   // console.log($event)
    //   if (result) {
    //     this.stbdet = result;
    //   }
    // });
  }
  getVc($event = '') {
    let user = this.operator_name,
      model = this.model_opt;

    // this.stb.getvc({ id: user, pair: 1, model: model, like: $event }).subscribe(result => {
    //   if (result) {
    //     this.vcdet = result;
    //   }
    // });
  }

  activeStb(item, action) {
    // this.confirmationDialogService.confirm('Confirm Box', 'Please Confirm Your Request')
      // .then((confirmed) => {
        this.loading = true;
        // let bulkpack = {
        //     sno:item['SNo'],
        //     status:true,
        //     vc_no:item['vc_no'],
        //     cas:item['cas_id'],
        //     pack_id:item['base_pack']
        //   };
        // console.log(item,action)
        action = action ? 1 : 0
        // this.stb.getpackrefreshlist({ cust_id: item.cust_id_pk, renewal: action }).subscribe(result => {
        //   if (result) {
        //     if (result['status'] == 1) {
        //       this.initiallist();
        //     }

        //     this.showResult(result);
        //     this.loading = false;
        //   }
        // });
      // })
      // .catch(() => {
      //   return;
      // });
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
  Download() {
    // this.cust.getcustList(
      // {
      //   id: this.operator_name,
      //   model: this.model_opt,
      //   box: this.stbopt,
      //   vc: this.vc,
      //   status: this.status,
      //   loc: this.loc,
      //   branch: this.branch,
      //   start_date: this.from_date,
      //   head_id: this.head_opt,
      //   end_date: this.to_date,
      //   user_type: this.op_type,
      //   address: this.address,
      //   c_times: this.from_cdate,
      //   c_timee: this.to_cdate,
      //   pack_type: this.pack_type,
      //   package: this.package,
       }
  
    
      

  // toastalert(msg, status) {
  //   const toast: Toast = {
  //     type: status == 1 ? 'success' : 'warning',
  //     title: status == 1 ? 'Success' : 'Failure',
  //     body: msg,
  //     timeout: 5000,
  //     showCloseButton: true,
  //     bodyOutputType: BodyOutputType.TrustedHtml,
  //   };
  //   this.alert.popAsync(toast);
  // }
  showResult(item) {

    // const activeModal = this.nasmodel.open(renewalResult, { size: 'lg', backdrop: 'static', container: 'nb-layout' });
    // activeModal.componentInstance.modalHeader = 'Result';
    // activeModal.componentInstance.result = item;


    // activeModal.result.then((data) => {

    //   this.initiallist();
    // }, (reason) => {
    //   return;
    // });
  }

  getpack() {
    let user = this.operator_name;
    // this.packs.getinvpack(
    //   {
    //     head_id: this.head_opt,
    //     a_la_cart: this.pack_type,
    //   }).subscribe(result => {
    //     if (result) {
    //       this.pack = result;

    //     }
    //   });
  }
}
