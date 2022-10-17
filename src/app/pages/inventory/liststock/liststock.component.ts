import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BroadcasterService, CountryService, PagerService, VendorService } from '../../_services';
import { StockService } from '../../_services/stock.service';
import { AddmodelComponent } from '../addmodel/addmodel.component';
import { vendordetailslistComponent } from '../vendordetailslist/vendordetailslist.component';

@Component({
  selector: 'ngx-liststock',
  templateUrl: './liststock.component.html',
  styleUrls: ['./liststock.component.scss']
})
export class ListstockComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;liststock;data;count;listmat;getitem;
  show;
  constructor(
    private broadcaster: BroadcasterService,
    private pageservice :PagerService,
    private vendor :VendorService,
    private stock :StockService
  ) { }

 async ngOnInit() {
  await this.initiallist();
  // await this.materialdetails({});
  }

  async initiallist() {
    this.liststock = await this.stock.liststock({index:(this.page - 1) * this.limit,limit:this.limit});
    console.log('list stock *********************', this.liststock)
    this.data = this.liststock[0];
    this.count = this.liststock[1].count;
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


 async materialdetails(item,index){
  console.log('Indx',index);
  
  this.show = index == this.show ? -1 : index;
   if (this.show == -1)
    return;
  // console.log('stockinid ',item)
  this.listmat = await this.stock.listmaterial({stockinid:item})
  this.getitem=this.listmat[0]
  // console.log("mater*******",this.listmat)



  }



  setPage() {
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    this.pagedItems = this.data;
  }
  
}

