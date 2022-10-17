import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { CountryService, PagerService } from '../../_services';
import { GeoAddcountryComponent } from '../geo-addcountry/geo-addcountry.component';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-geo-countrylist',
  templateUrl: './geo-countrylist.component.html',
  styleUrls: ['./geo-countrylist.component.scss']
})
export class GeoCountrylistComponent implements OnInit {
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25; getlistcountry; data; count;
   modalOptions: NgbModalOptions;

  constructor(
     public pageservice: PagerService, private route: Router,
    private country: CountryService,
    private modal: NgbModal,
  ) {
    this.modalOptions = {
      // backdrop:'static',
      // backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.initiallist();
  }

  async initiallist() {
    this.getlistcountry = await this.country.listcountrygeo({ index: (this.page - 1) * this.limit, limit: this.limit });
    console.log('country=====', this.getlistcountry)
    this.data = this.getlistcountry[0];
    this.count = this.getlistcountry[1].count;
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


  AddCountry() {
    const modalRef = this.modal.open(GeoAddcountryComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Add Country';
    modalRef.result.then((data) => {
      this.initiallist();
    })
  };

  editcountry(items) {
    const modalRef = this.modal.open(GeoAddcountryComponent, { container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.title = 'Edit Country';
    modalRef.componentInstance.item = items
    modalRef.result.then((data) => {
      this.initiallist();
    })
  }
}
