import { Component, OnInit } from '@angular/core';
import { GeoAddlocationComponent } from '../geo-addlocation/geo-addlocation.component';
import{ModalDialogModule } from 'ngx-modal-dialog';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NbDialogService } from '@nebular/theme';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeoAddcountryComponent } from '../geo-addcountry/geo-addcountry.component';
@Component({
  selector: 'ngx-geo-listlocation',
  templateUrl: './geo-listlocation.component.html',
  styleUrls: ['./geo-listlocation.component.scss']
})
export class GeoListlocationComponent implements OnInit {

  data;
  pager: any = {};
  pagedItems: any = [];
  page: number = 1;
  // modalRef: BsModalRef;
  modalRef;
  
  constructor(
    private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.initiallist();
  }
  initiallist() {
    // this.das.listlocation({ index: (this.page - 1) * 10, limit: 10 }).subscribe(result => {
    //   // console.log(result)
    //   if (result) {
    //     this.data = result;
    //     this.setPage();
    //   }
    // });
  }
  getlist(page) {
    // console.log(this.page)
    var total = Math.ceil(this.data[1]['count'] / 10);
    // let result = this.pageservice.pageValidator(this.page, page, total);
    // this.page = result['value'];
    // if (result['result']) {
    //   this.initiallist();
    // }
  }
  setPage() {
    // this.pager = this.pageservice.getPager(this.data[1]['count'], this.page, 10);
    this.pagedItems = this.data[0];
  }
 
  
    open() {
      this.dialogService.open(GeoAddlocationComponent, {
        context: {
          title: 'This is a title passed to the dialog component',
        },
      });
    }



  Edit(item) {
    // const activeModal = this.nasmodel.open(GeoAddlocationComponent, { size: 'sm', container: 'nb-layout' });

    // activeModal.componentInstance.modalHeader = 'Update Location';
    // activeModal.componentInstance.item = item;

    // activeModal.result.then((data) =>
     {
      this.initiallist();
    } (reason) => {
      return;
    };
  }

}
