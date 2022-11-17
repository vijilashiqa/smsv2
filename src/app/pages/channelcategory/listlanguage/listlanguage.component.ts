import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddlangComponent } from '../addlang/addlang.component';
import { PagerService } from '../../_services';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'ngx-listlanguage',
  templateUrl: './listlanguage.component.html',
  styleUrls: ['./listlanguage.component.scss']
})
export class ListlanguageComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;getlistarea;data;count;
  constructor(private modal: NgbModal,
    private channel: ChannelService,
    private pageservice :PagerService) { }

  async ngOnInit(){
  await this.initiallist()
  }
  Addcat()
  {

  }

  
  async initiallist() {
    this.getlistarea = await this.channel.listlang({index:(this.page - 1) * this.limit,limit:this.limit});
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
  
  addlang(){
    const modalRef = this.modal.open(AddlangComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add Language';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }
  Edit(items) {
    const modalRef = this.modal.open(AddlangComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit Language';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
    this.initiallist();
  })
}
}
