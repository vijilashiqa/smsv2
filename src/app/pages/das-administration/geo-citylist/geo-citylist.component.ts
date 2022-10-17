import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CountryService, PagerService } from '../../_services';
import { GeoAddcityComponent } from '../geo-addcity/geo-addcity.component';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GeoAddlocationComponent } from '../geo-addlocation/geo-addlocation.component';
@Component({
  selector: 'ngx-geo-citylist',
  templateUrl: './geo-citylist.component.html',
  styleUrls: ['./geo-citylist.component.scss']
})
export class GeoCitylistComponent implements OnInit {
  
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;getcitylist;data;count;

  modalRef: BsModalRef;

  modalOptions: NgbModalOptions;
  constructor(private modalService: BsModalService,public pageservice: PagerService,private modal: NgbModal,
    private dialogService: NbDialogService , private country : CountryService) { }

  ngOnInit(): void {
    this.initiallist();
  }


  async initiallist() {
    this.getcitylist = await this.country.listcitygeo({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('dfgvdg=====', this.getcitylist)
    this.data = this.getcitylist[0];
    this.count = this.getcitylist[1].count;
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

  AddCity()  {
    const modalRef = this.modal.open(GeoAddcityComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add City';
    modalRef.result.then((data) => {
      this.initiallist();
    });
}
  EditCity(items) {
    const modalRef = this.modal.open(GeoAddcityComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit City';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
    this.initiallist();
  })
}
}
