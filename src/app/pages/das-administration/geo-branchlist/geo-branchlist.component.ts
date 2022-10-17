import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeoAddbranchComponent } from '../geo-addbranch/geo-addbranch.component';
import { GeoAddlocationComponent } from '../geo-addlocation/geo-addlocation.component';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'ngx-geo-branchlist',
  templateUrl: './geo-branchlist.component.html',
  styleUrls: ['./geo-branchlist.component.scss']
})
export class GeoBranchlistComponent implements OnInit {
  data;
  pager: any = {};
  pagedItems: any = [];
  page: number = 1;
  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService,
    private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.initiallist();
  }
  initiallist() {
    // this.das.listBranch({ index: (this.page - 1) * 10, limit: 10 }).subscribe(result => {
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
    // this.pagedItems = this.data[0];
  }

  Addbranch() {
    // const activeModal = this.nasmodel.open(GeoAddbranchComponent, { size: 'sm', container: 'nb-layout' });

   
   
      this.dialogService.open(GeoAddbranchComponent, {
        context: {
          title: 'This is a title passed to the dialog component',
        },
      });
    }
    

  editbranch(item) {
    //  const activeModal = this.nasmodel.open(AddbranchComponent, { size: 'sm', container: 'nb-layout' });

    //  activeModal.componentInstance.modalHeader = 'Update Branch';
    //  activeModal.componentInstance.item = item;

    // activeModal.result.then((data) => 
    
    //  if (data) 
    //  {
    //   this.initiallist();
    // },
    //  (reason) => 
    //  {
    //   return;
    // });
  }

}

