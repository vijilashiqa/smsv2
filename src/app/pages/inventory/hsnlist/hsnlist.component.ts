import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CountryService, PagerService, VendorService } from '../../_services';
import { HsnService } from '../../_services/hsn.service';
import { AddhsnComponent } from '../addhsn/addhsn.component';

@Component({
  selector: 'ngx-hsnlist',
  templateUrl: './hsnlist.component.html',
  styleUrls: ['./hsnlist.component.scss']
})
export class HsnlistComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;listhsn;data;count;
  modalRef: BsModalRef;
  
  constructor(private modal: NgbModal,
   private hsn :HsnService,
    public pageservice: PagerService,
    private vendorservices : VendorService) { }
  ngOnInit() {

    this.initiallist();
  }



  async initiallist() {
    this.listhsn = await this.hsn.listhsn({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('list model', this.listhsn)
    this.data = this.listhsn[0];
    this.count = this.listhsn[1].count;
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
  
  

  Addmodel() {
    const modalRef = this.modal.open(AddhsnComponent, {  container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add HSN';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

  Editmodel(items) {
    const modalRef = this.modal.open(AddhsnComponent, {container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit HSN';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
    this.initiallist();
  })
}

  }
 
  