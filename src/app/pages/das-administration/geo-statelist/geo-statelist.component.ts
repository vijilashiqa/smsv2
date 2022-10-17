 import { Component, OnInit } from '@angular/core';
 import { CountryService, PagerService } from '../../_services';
import { GeoAddstateComponent } from '../geo-addstate/geo-addstate.component';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-geo-statelist',
  templateUrl: './geo-statelist.component.html',
  styleUrls: ['./geo-statelist.component.scss']
})
export class GeoStatelistComponent implements OnInit {
  data; count
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;

  getlistgeo: any;
 
  constructor(
     private country: CountryService,
    public pageservice: PagerService,
    private modal: NgbModal,

  ) { }


  async ngOnInit() {
    await this.initiallist();
  }
  async initiallist() {

    this.getlistgeo = await this.country.liststategeo({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('dfgvdg=====', this.getlistgeo)
    this.data = this.getlistgeo[0];
    this.count = this.getlistgeo[1].count;
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

  addState() {
    const modalRef = this.modal.open(GeoAddstateComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add State';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

  editState(items) {
    const modalRef = this.modal.open(GeoAddstateComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit State';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }

  }

 
 