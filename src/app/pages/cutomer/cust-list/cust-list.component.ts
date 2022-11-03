import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PagerService } from '../../_services';
import { StbmanagementService } from '../../_services/stbmanagement.service';
import { NgForm } from '@angular/forms';
import { SubscriberService } from '../../_services/subscriber.service';
import { Router } from '@angular/router';
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
  cas:any=[];castype='';listsubscriberl
 

  constructor(
    public pageservice: PagerService,
    private stb: StbmanagementService,
    private modal: NgbModal,
    private subscriber :SubscriberService,
    private router: Router,

  ) { }


   ngOnInit() {
   this.initiallist();
    this.createForm();
  }
  async initiallist() {

    this.listsubscriberl = await this.subscriber.listsubscriber({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('list subscriber=====', this.listsubscriberl)
    this.data = this.listsubscriberl[0];
    this.count = this.listsubscriberl[1].count;
    this.setPage();

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
  setPage() {
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    this.pagedItems = this.data;
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


  Edit(item){

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
