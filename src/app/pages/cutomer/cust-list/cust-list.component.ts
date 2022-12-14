import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeadendService, PackageService, PagerService } from '../../_services';
import { StbmanagementService } from '../../_services/stbmanagement.service';
import { NgForm } from '@angular/forms';
import { SubscriberService } from '../../_services/subscriber.service';
import { Router } from '@angular/router';
import { OperatorService } from '../../_services/operator.service';
import { StockService } from '../../_services/stock.service';
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
  vcdet: any = []; Custform; limit: number = 25; headend = '';getpackagelist;
  profileid = ''; loc = ''; branch = ''; op_type = ''; listhead;
  model_opt = ''; stbopt = ''; vc = ''; status = ''; to_cdate = '';
  from_date = ''; to_date = ''; head_opt = ''; address = ''; operatortypelist;
  pack: any = []; pack_type = ''; package = ''; from_cdate = ''; listvc; pair_status
  cas: any = []; castype = ''; listsubscriberl; getmodellist; getcas; listboxpair


  constructor(
    public pageservice: PagerService,
    private operator: OperatorService,
    private headends: HeadendService,
    private subscriber: SubscriberService,
    private router: Router,
    private stock: StockService,
    private stb: StbmanagementService,
    private packageser : PackageService

  ) { }


  ngOnInit() {
    this.initiallist();
    this.createForm();
    this.getHeadend();
    this.getModel();
    this.GetCas();
    this.boxparing();
     this.vcparing();
    this.getpackage();
  }
  async initiallist() {

    this.listsubscriberl = await this.subscriber.listsubscriber({
      index: (this.page - 1) * this.limit,
      limit: this.limit,
      user_type: this.op_type,
      userid: this.profileid,
      model: this.model_opt,
      boxno: this.stbopt,
      vc: this.vc,
      status: this.status,
      cby: this.from_date,
      end_date: this.to_date,
      hdid: this.headend,
      pack_type: this.pack_type,
      package: this.package,
      cas: this.castype,
    });
    console.log('list subscriber=====', this.listsubscriberl)
    this.data = this.listsubscriberl[0];
    this.count = this.listsubscriberl[1].count;
    this.setPage();

  }

async getpackage(){
 this.getpackagelist = await this.packageser.searchpack({  hdid: this.headend  , packtype :this.pack_type})
 console.log("get package ",this.getpackagelist)
}

  async boxparing() {
    this.listboxpair = await this.stb.getboxpair({ hdid: this.headend })
    console.log('listboxpair', this.listboxpair)
  }

  async vcparing() {
    let boxno = this.stbopt;
    console.log('listboxpair in funxction', this.listboxpair)
    const boxvc_data = this.listboxpair?.filter(x => x.boxid == boxno)
    console.log('stbno in aarray', boxno)
    console.log('vcid here', boxvc_data);
    this.pair_status = boxvc_data[0].pairflg;
    console.log("pair status @@@@@",this.pair_status)
    this.listvc = [];
    if (boxvc_data[0].vcid) {
      console.log("boxdata@@@@@@@@", boxvc_data[0].vcid)
      this.listvc = [{ vcid: boxvc_data[0].vcid, vcno: boxvc_data[0].vcno }]
      console.log('listvc**********', this.listvc)
    } else {
      const data = []
      let vclist = this.listboxpair.filter(x => x.vcno !== 0 && x.vcno !== null).reduce((a, v) => {
        const value = { vcid: v.vcid, vcno: v.vcno }
        data.push(value)
        return data
       
      }, [])
      console.log("data",data)
      this.listvc = vclist
      console.log('vclist', vclist);
    }
  }


  async GetCas($event = '') {
    this.getcas = await this.headends.getcas({ like: $event })
    console.log(this.getcas)
  }


  view(item) {
    localStorage.setItem('cust_data', JSON.stringify(item));
    console.log("daatahere", JSON.stringify(item))
    this.router.navigate(["/pages/customer/view-cust"])
  }

  getlist(page) {
    var total = Math.ceil(this.count / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result['value'];
    if (result['result']) {
      this.initiallist();
    };
  }

  async getoperator() {
    this.operatortypelist = await this.operator.searchoperator({ usertype: this.op_type, hdid: this.headend })
    console.log('list operator', this.operatortypelist)
  }


  async getHeadend() {
    console.log('event', event)
    this.listhead = await this.headends.getHeadend({})
    console.log(this.listhead)
  }
 
  async getModel() {
    this.getmodellist = await this.stock.getstockmodel({});
  }
  setPage() {
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    this.pagedItems = this.data;
  }
  createForm() {
    this.Custform = new FormGroup({
      subname_check: new FormControl(true),
      optname_check: new FormControl(),
      custid_check: new FormControl(true),
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
      headend : new FormControl(true)
    });
  }


  Edit(item) {

  }
  Download() {
    // this.cust.getcustList(
    // {
    //   id: this.profileid,
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


  renew(item) {
    localStorage.setItem('cust_data', JSON.stringify(item));
    this.router.navigate(['/pages/customer/renew_cust'])
  }

  getpack() {
    let user = this.profileid;
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
