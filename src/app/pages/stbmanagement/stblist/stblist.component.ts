import { Component, OnInit } from '@angular/core';
import { CountryService, HeadendService, PagerService, VendorService } from '../../_services';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { StbmanagementService } from '../../_services/stbmanagement.service';
import { StbparingComponent } from '../stbparing/stbparing.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OperatorService } from '../../_services/operator.service';
import { StockService } from '../../_services/stock.service';

@Component({
  selector: 'ngx-stblist',
  templateUrl: './stblist.component.html',
  styleUrls: ['./stblist.component.scss']
})
export class StblistComponent implements OnInit {
  stbform; roleVal: any = []; search: boolean = false;
  pager: any = {}; page: number = 1; act_check = true; exp_check = true;
  pagedItems: any = []; head: any = []; loc: any = []; opt: any = [];
  operator_name; locitem: any = []; branchitem: any = [];
  vcdet: any = []; stbdet: any = []; model: any = []; limit = 25;operatortypelist
  pair = ''; assign = '';getmodellist;
  cas = ''; stbopt = '';status = ''; profileid = '';listhead; op_type ='';
  from_date = ''; to_date = ''; headend =''; modelname = ''; vc = '';
  status_check = true; cas_check = true; stb_check = true; vc_check = true; id_check = true;
  data; count;listboxpair;listvc;pair_status
  modalRef: BsModalRef;


  liststb;
  constructor(
    public pageservice: PagerService,
    private stb: StbmanagementService,
    private modal: NgbModal,
    private stock : StockService,
    private headends : HeadendService,
    private operator : OperatorService

  ) { }


  async ngOnInit() {
    await this.initiallist();
    await this.getHeadend();
    await this.getoperator();
    await this.getModel();
    await this.boxparing();
    await this.vcparing();
  }
  async initiallist() {

    this.liststb = await this.stb.liststb({index:(this.page - 1) * this.limit,
      limit:this.limit,
      modelname: this.modelname,
      box: this.stbopt,
      vcid: this.vc,
      usertype : this.op_type,
      status: this.status,
     // loc: this.loc,
      profileid: this.profileid,
      cdate: this.from_date,
      mdate: this.to_date,
      hdid: this.headend,
      pair: this.pair,
      assign: this.assign});
    console.log('list stb=====', this.liststb)
    this.data = this.liststb[0];
    this.count = this.liststb[1].count;
    this.setPage();

  }


  async getHeadend($event = '') {
    console.log('event',event)
    this.listhead = await this.headends.getHeadend({ })
    console.log(this.listhead)
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
    console.log('vcid', boxvc_data);
    this.pair_status = boxvc_data.pairflg;
    this.listvc = [];
    if (boxvc_data.vcid) {
      console.log("boxdata@@@@@@@@", boxvc_data.vcid)
      this.listvc = [{ vcid: boxvc_data.vcid, vcno: boxvc_data.vcno }]
      console.log('listvc**********', this.listvc)
    } else {
      const data = []
      let vclist = this.listboxpair.filter(x => x.vcno !== 0 && x.vcno !== null).reduce((a, v) => {
        const value = { vcid: v.vcid, vcno: v.vcno }
        data.push(value)
        return data
      }, [])
      this.listvc = vclist
      console.log('vclist', vclist);
    }
  }


  async getoperator(){

    this.operatortypelist = await this.operator.searchoperator({ usertype: this.op_type, hdid: this.headend })
    console.log('list operator', this.operatortypelist)
  }


  async getModel() {
    this.getmodellist = await this.stock.getstockmodel({});
    console.log('stb list',this.getmodellist)
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




  addpair(){

   
      const modalRef = this.modal.open(StbparingComponent, { container: 'nb-layout', backdrop: false });
      modalRef.componentInstance.title = 'Paring/Unparing';
      modalRef.result.then((data) => {
        this.initiallist();
      })

  }
}
