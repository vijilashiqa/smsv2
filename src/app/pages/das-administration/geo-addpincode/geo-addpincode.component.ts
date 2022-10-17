import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../_services';

@Component({
  selector: 'ngx-geo-addpincode',
  templateUrl: './geo-addpincode.component.html',
  styleUrls: ['./geo-addpincode.component.scss']
})
export class GeoAddpincodeComponent implements OnInit {
  modalHeader: string;
  submit: boolean = false; PincodeForm;
  item; pin;
  @Input() title: string;

  constructor(public activeModal: NgbActiveModal, private country: CountryService,
    private toast: ToastrService,
  ) { }

  async ngOnInit() {
    await this.createForm();
    console.log('Item----', this.item);
  }

  async addPin() {
    this.submit = true;
    console.log('addpin submit================ ', this.item)
    if (!this.PincodeForm.valid) {
      return;
    }
    let method = this.item ? 'editPincodegeo' : 'addPincodegeo';
    if (this.item) this.PincodeForm.value['pincode_id'] = this.item['id'];
      console.log('pincode ========', this.item)
      let result = await this.country[method](this.PincodeForm.value)
      if (result && result['status'] == 1) {
        this.toast.success(result['msg']);
        this.close();
      } else {
        this.toast.warning(result['msg'])
        console.log('add...', this.PincodeForm.value);
      }
    
  }

  close() {
    console.log('Status========= close----------');
    this.activeModal.close();
  }

  createForm() {
    this.PincodeForm = new FormGroup({
      pincode: new FormControl(this.item?.pincode || '', Validators.required)
    });
  }
}
