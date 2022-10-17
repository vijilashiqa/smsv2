import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CountryService, PagerService } from '../../_services';
import { GeoAddpincodeComponent } from '../geo-addpincode/geo-addpincode.component';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-geo-pincodelist',
  templateUrl: './geo-pincodelist.component.html',
  styleUrls: ['./geo-pincodelist.component.scss']
})
export class GeoPincodelistComponent implements OnInit {

  
  modalRef: BsModalRef;getpincodelist;
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;getlistdect;data;count;
  constructor(
    private dialogService: NbDialogService,
    public pageservice: PagerService,
    private modal: NgbModal,
    private country : CountryService) { }
  ngOnInit() {
    this.initiallist();
  }
  async initiallist() {
    this.getpincodelist = await this.country.listpincodegeo({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('getlistpincode=====', this.getpincodelist)
    this.data = this.getpincodelist[0];
    this.count = this.getpincodelist[1].count;
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

  
  EditPincode(item) {
    const modalRef = this.modal.open(GeoAddpincodeComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit Pincode';
    modalRef.componentInstance.item = item
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }

  AddPincode() {
    
    {
      const modalRef = this.modal.open(GeoAddpincodeComponent, { container: 'nb-layout', backdrop: false });
      modalRef.componentInstance.title = 'Add Pincode';
      modalRef.result.then((data) => {
        this.initiallist();
      })
    };
    
  }

}
