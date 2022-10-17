import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CountryService, PagerService, VendorService } from '../../_services';
import { BoxmodelService } from '../../_services/boxmodel.service';
import { AddmodelComponent } from '../addmodel/addmodel.component';


@Component({
  selector: 'ngx-modellist',
  templateUrl: './modellist.component.html',
  styleUrls: ['./modellist.component.scss']
})
export class ModellistComponent implements OnInit {
  
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;listmodel;data;count;
  modalRef: BsModalRef;
  
  constructor(private modal: NgbModal,
    private boxmodel :BoxmodelService,
    public pageservice: PagerService,
    private vendorservices : VendorService) { }
  ngOnInit() {

    this.initiallist();
  }



  async initiallist() {
    this.listmodel = await this.boxmodel.listboxmodel({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('list model', this.listmodel)
    this.data = this.listmodel[0];
    this.count = this.listmodel[1].count;
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
    const modalRef = this.modal.open(AddmodelComponent, {  size: 'lg', container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add Model';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

  Editmodel(items) {
    const modalRef = this.modal.open(AddmodelComponent, {size: 'lg', container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit Model';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
    this.initiallist();
  })
}

  }
 
  