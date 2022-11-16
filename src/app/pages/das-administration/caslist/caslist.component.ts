import { Component, OnInit } from '@angular/core';
import { HeadendService, PagerService } from '../../_services';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddcasComponent } from '../addcas/addcas.component';
@Component({
  selector: 'ngx-caslist',
  templateUrl: './caslist.component.html',
  styleUrls: ['./caslist.component.scss']
})
export class CaslistComponent implements OnInit {
  data; count
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;listcas;
 
  constructor(
     private headend: HeadendService,
    public pageservice: PagerService,
    private modal: NgbModal,

  ) { }


  async ngOnInit() {
    await this.initiallist();
  }
  async initiallist() {
    this.listcas = await this.headend.listcas({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('listcas', this.listcas)
    this.data = this.listcas[0];
    this.count = this.listcas[1].count;
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

  addcas() {
    const modalRef = this.modal.open(AddcasComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add CAS';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

  editcas(items) {
    const modalRef = this.modal.open(AddcasComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit CAS';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }

  }

 
 