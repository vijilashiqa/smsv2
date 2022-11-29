import { Component, OnInit } from '@angular/core';
import { BroadcasterService, HeadendService, PackageService, PagerService } from '../../_services';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackagechannelComponent } from '../packagechannel/packagechannel.component';
@Component({
  selector: 'ngx-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.scss']
})
export class PackagelistComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;listpackage;data;count;
  headend = ''; op_type = ''; opt: any = [];listhead;broadcast
   share: any = []; operator_name = '';
  pack_type = ''; pack: any = []; package = '';getpackagelist
  index = -1; cas: any = []; cas_type = ''; prod_id = '';
  broadlist: any = []; broadcaster = '';  modalRef: BsModalRef;
  constructor(private packageser :PackageService, 
    private pageservice :PagerService,   
    private modal: NgbModal,
    private broadcasterService :BroadcasterService,
    private headends : HeadendService) { }

  ngOnInit() {
    this.initiallist();
    this.getpack();
    this.getHeadend();
    this.Getbroadcasteredit()
    this.getpackage();
  }
  
  async Getbroadcasteredit($event='') {
       this.broadcast = await this.broadcasterService.getbroadcaster({hdid : this.headend});
      console.log('result ********',this.broadcast)
     }


     
  async initiallist() {
    this.listpackage = await this.packageser.listpackage({index:(this.page - 1) * this.limit,
      limit:this.limit,
      hdid: this.headend,
      packtype: this.pack_type,
      packname: this.package,
      bcid: this.broadcaster,
     // prod_id: this.prod_id
    });
    console.log('list channel services', this.listpackage)
    this.data = this.listpackage[0];
    this.count = this.listpackage[1].count;
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
  Edit(item)
{


} 


async getpackage(){
  this.getpackagelist = await this.packageser.searchpack({  hdid: this.headend  , packtype :this.pack_type})
  console.log("get package ",this.getpackagelist)
 }

channels(item) {
    
  console.log('dsvdvxd213123123vxv',item)
  const modalRef = this.modal.open(PackagechannelComponent, {size:'sm', container: 'nb-layout', backdrop: false });
  modalRef.componentInstance.modalHeader = 'Channel List';
  modalRef.componentInstance.item = item;
  modalRef.result.then((data) => { ;
  
  })

}
async getHeadend() {
  console.log('event', event)
  this.listhead = await this.headends.getHeadend({})
  console.log(this.listhead)
}

  getoperator($event = "") {
    // console.log($event)
    
  }
 async getpack() {
    // let user = this.operator_name;
    
// let getpackagelist =await this.packageser.listpackage({});
// console.log('zdfvxcbcvb',getpackagelist);

  }

  getcas() {
    

  }
  getbroadcaster() {

    
  }
  Download() {
    
  }

}
