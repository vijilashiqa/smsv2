import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CountryService, PagerService } from '../../_services';
import { GeoAddareaComponent } from '../geo-addarea/geo-addarea.component';
@Component({
  selector: 'ngx-geo-arealist',
  templateUrl: './geo-arealist.component.html',
  styleUrls: ['./geo-arealist.component.scss']
})
export class GeoArealistComponent implements OnInit {
  
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;getlistarea;data;count;
  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService,private modal: NgbModal,
    private dialogService: NbDialogService,
    public pageservice: PagerService,
    private country : CountryService) { }
  ngOnInit() {

    this.initiallist();
  }



  async initiallist() {
    this.getlistarea = await this.country.listareageo({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('area=====', this.getlistarea)
    this.data = this.getlistarea[0];
    this.count = this.getlistarea[1].count;
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
  
  

  AddArea() {
    const modalRef = this.modal.open(GeoAddareaComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add Area';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

  editarea(items) {
    const modalRef = this.modal.open(GeoAddareaComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit Area';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
    this.initiallist();
  })
}

  }
 
  

