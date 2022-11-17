import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PagerService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';
import { AddgenreComponent } from '../addgenre/addgenre.component';

@Component({
  selector: 'ngx-listgenre',
  templateUrl: './listgenre.component.html',
  styleUrls: ['./listgenre.component.scss']
})
export class listgenreComponent implements OnInit {
  
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;listgenre;data;count;
  modalRef: BsModalRef;item;
  constructor(private modal: NgbModal,
    private channel:ChannelService,
    private pageservice :PagerService) { }

  async ngOnInit() {
await this.initiallist();
  }

  async initiallist() {
    this.listgenre = await this.channel.listgenre({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('listgenre add**', this.listgenre)
    this.data = this.listgenre[0];
    this.count = this.listgenre[1].count;
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
  
  Edit(items) {
    const modalRef = this.modal.open(AddgenreComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit Genre';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }
  


  AddSub(){
    const modalRef = this.modal.open(AddgenreComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add Genre';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }
}
