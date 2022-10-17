import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BodyOutputType } from 'angular2-toaster';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-geo-addlocation',
  templateUrl: './geo-addlocation.component.html',
  styleUrls: ['./geo-addlocation.component.scss']
})
export class GeoAddlocationComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; AddlocationForm; item;
  head: any = []; location;
  @Input() title: string;
  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) { }

  ngOnInit(): void {
    this.createForm();
    this.getheadend();
  }
  addLocation() {
   
  }
  getheadend()
   {

    
  }
  dismiss() {
    this.ref.close();
  }

  close(){
    this.ref.close();
  }
  createForm() {
    this.AddlocationForm = new FormGroup({
      headName: new FormControl(this.item ? this.item['headend_fk'] : '', Validators.required),
      locationName: new FormControl(this.item ? this.item['loc_name'] : '', Validators.required)
    });
  }
}
