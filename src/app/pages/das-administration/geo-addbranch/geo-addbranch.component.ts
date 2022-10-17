import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
@Component({
  selector: 'ngx-geo-addbranch',
  templateUrl: './geo-addbranch.component.html',
  styleUrls: ['./geo-addbranch.component.scss']
})
export class GeoAddbranchComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; AddbranchForm; item;
  head: any = []; loc: any = []; branch;
  @Input() title: string;
  modalRef: BsModalRef;
  
  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) { }

  ngOnInit(): void {
    this.createForm();
    this.getheadend();
    if (this.item) {
      this.getlocation();
    }
  }
  getlocation() {
    let head = this.AddbranchForm.value['headName'];
    if (head != '') {
      // this.das.getlocation({ head_id: head }).subscribe(result => {
      //   this.loc = result;
      //   if (result) {
      //     this.loc = result;
      //   }
      // });
    }
  }

  getheadend() {
    // this.das.getheadend().subscribe(result => {
    //   this.head = result;
    //   if (result) {
    //     this.head = result;
    //   }
    // });
  }

  addBranch() {
    this.submit = true;
    if (!this.AddbranchForm.valid) {
      return;
    }
    let method;
    if (this.item) {
      method = 'editBranch';
      this.AddbranchForm.value['branch_id'] = this.item['branch_id'];
    } else {
      method = 'addBranch';
    }

    // this.das[method](this.AddbranchForm.value).subscribe(result => {
    //   if (result) {
    //     this.branch = result;
    //     const toast: Toast = {
    //       type: result['status'] == 1 ? 'success' : 'warning',
    //       title: result['status'] == 1 ? 'Success' : 'Failure',
    //       body: result['msg'],
    //       timeout: 5000,
    //       showCloseButton: true,
    //       bodyOutputType: BodyOutputType.TrustedHtml,
    //     };
    //     this.alert.popAsync(toast);
    //     if (result['status'] == 1)
    //       this.activeModal.close();
    //   }
    // });
  }
  close(){
    this.ref.close();
  }
  createForm() {
    this.AddbranchForm = new FormGroup({
      headName: new FormControl(this.item ? this.item['headend_fk'] : '', Validators.required),
      locationname: new FormControl(this.item ? this.item['loc_fk'] : '', Validators.required),
      BranchName: new FormControl(this.item ? this.item['branch_name'] : '', Validators.required)
    });
  }


}
