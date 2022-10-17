import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../@core/mock/users.service';
import { HeadendService, PagerService } from '../../_services';
import { OperatorService } from '../../_services/operator.service';
import { UserhdcasComponent } from '../userhdcas/userhdcas.component';
@Component({
  selector: 'ngx-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  broadcaster = ''; broadlist: any = [];genre='';genres;lang;channelForm; pager: any = {}; page: number = 1; 
  pagedItems: any = []; limit = 25;getcitylist;data;count;listchannel;listoperator
  constructor(
    private modal: NgbModal,
    private pageservice :PagerService,
    private oprator :OperatorService
  ) { }

  async ngOnInit() {
    await this.initiallist();
  }
  async initiallist() {

    this.listoperator = await this.oprator.listoperator({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('list stb=====', this.listoperator)
    this.data = this.listoperator[0];
    this.count = this.listoperator[1].count;
    this.setPage();

  }

  Adduser() {
    const modalRef = this.modal.open(UserhdcasComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add Hd user';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

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
}
