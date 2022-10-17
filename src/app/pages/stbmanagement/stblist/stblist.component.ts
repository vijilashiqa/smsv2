import { Component, OnInit } from '@angular/core';
import { CountryService, PagerService, VendorService } from '../../_services';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { StbmanagementService } from '../../_services/stbmanagement.service';
import { StbparingComponent } from '../stbparing/stbparing.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  vcdet: any = []; stbdet: any = []; model: any = []; limit = 25;
  pair = ''; assign = ''
  cas = ''; stbopt = '';status = ''; branch = '';
  from_date = ''; to_date = ''; head_opt; model_opt = ''; vc = '';
  status_check = true; cas_check = true; stb_check = true; vc_check = true; id_check = true;
  data; count
  modalRef: BsModalRef;


  liststb;
  constructor(
    public pageservice: PagerService,
    private stb: StbmanagementService,
    private modal: NgbModal,

  ) { }


  async ngOnInit() {
    await this.initiallist();
  }
  async initiallist() {

    this.liststb = await this.stb.liststb({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('list stb=====', this.liststb)
    this.data = this.liststb[0];
    this.count = this.liststb[1].count;
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

  addpair(){

   
      const modalRef = this.modal.open(StbparingComponent, { container: 'nb-layout', backdrop: false });
      modalRef.componentInstance.title = 'Paring/Unparing';
      modalRef.result.then((data) => {
        this.initiallist();
      })

  }
}
