import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService, VendorService } from '../../_services';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../_services/stock.service';
import { HsnService } from '../../_services/hsn.service';
@Component({
  selector: 'ngx-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.scss']
})
export class EditstockComponent implements OnInit {


  submit: boolean = false; editstockForm; getvendorlist; getmodellist; locationlist; gethsn; editfirstarray;
  vendor; loc;; STB; listhead; editdata = {}; id; editflag = false; editable: boolean = false;
  materialArray;
  constructor(
    private _fb: FormBuilder,
    private hsn: HsnService,
    private headend: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private stock: StockService
  ) {
    this.getHeadend();
    this.createForm()
  }
  async addstockIn() {
    this.submit = true;
    const invalid = [];
    const control = this.editstockForm.controls
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.editstockForm.invalid) {
      console.log('Invalid value -----', invalid);
      window.alert('Please fill mandatory fields');
      return;
    }
    this.editstockForm.value.id = this.id;
    let result = await this.stock.editstock(this.editstockForm.value);
    console.log('result in stock', result)
    if (result[0]['err_code'] == 0) {
      this.toast.success(result[0]['msg'])
      this.route.navigate(['/pages/inventory/liststock'])
    } else {
      this.toast.warning(result[0]['msg'])
    }
  }



  changeclear(...data) {
    for (let i of data) {
      this.editstockForm.controls[i].setValue("");
    }
  }

  typeclearHeadend(val = "1") {
    this.changeclear('vendorid', 'vendordetid');
  }

  typeclearVendor(val = "1") {
    this.changeclear('vendordetid');
  }
  async ngOnInit() {
    this.id = this.aRoute.snapshot.queryParams.id
    if (this.id) {
      this.clearValidation();
      console.log('iddddddddddddddddddddddd', this.id)
      this.editable = true
      this.editflag = true;
      await this.edit();
     
      await this.getVendor();
      await this.getlocation();
      await this.gethsnlistg();
      this.getModel();

    }


  }
  async getVendor() {
    this.getvendorlist = await this.stock.getstockvendor({ hdid: this.editstockForm.value['hdid'] });
    console.log("get vendor ", this.getvendorlist)
  }
  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({})
    console.log('headend--', this.listhead);
  }
  async getModel() {
    this.getmodellist = await this.stock.getstockmodel({});
  }
  async getlocation() {
    this.locationlist = await this.stock.getstocklocation({ vendorid: this.editstockForm.value['vendorid'] });

  }
  async gethsnlistg() {
    this.gethsn = await this.hsn.selecthsn({ hdid: this.editstockForm.value['hdid'] })
    console.log('hsn list', this.gethsn)

  }
  async edit() {
    this.editdata = await this.stock.geteditstock({ stockinid: this.id });
    this.editfirstarray = this.editdata[0][0]
    console.log('editfirst', this.editfirstarray)
    this.materialArray = this.editdata[1]
    this.createForm()
    for (let item of this.materialArray) {
      console.log("item/////////////////", item)
      let total = item.qty * item.price
      this.addMaterial(item.materialid, item.boxmodelid, item.qty, item.price, total)
    }
  }


  clearValidation() {
    console.log('clear validation*******************')
    this.editstockForm.get('stockinid').clearValidators();
    this.editstockForm.get('stockinid').updateValueAndValidity();
  }



  get stockinid(): FormArray {
    return this.editstockForm.get('stockinid') as FormArray;
  }

  addMaterial(id = 0, box = '', qty = 0, price = 0, amt = 0) {
    this.stockinid.push(this.createMaterial(id, box, qty, price, amt));
  }

  deleteMatField(index: number) {
    this.stockinid.removeAt(index);
  }

  createMaterial(id = 0, box = '', qty = 0, price = 0, amt = 0): FormGroup {
    return this._fb.group({
      materialid: [id || ''],
      boxmodelid: [box || ''],
      qty: [qty || ''],
      price: [price || ''],
      total: [{
        value: amt || '',
        disabled: true
      }]
    });
  }

  onkeyupQty(event: any, index: number) {
    if (event.target.value != "") {
      var total = Number(this.editstockForm.value["stockinid"][index]["qty"]) * Number(this.editstockForm.value["stockinid"][index]["price"]);
      const controlArray = <FormArray>this.editstockForm.get('stockinid');
      controlArray.controls[index].get('total').setValue(total);
    }

  }
  createForm() {
    this.editstockForm = new FormGroup({
      hdid: new FormControl(this.editfirstarray?.['hdid'] || '', Validators.required),
      warranty_type: new FormControl(this.editfirstarray?.['warranty_type'] || '', Validators.required),
      warranty_period: new FormControl(this.editfirstarray?.['warranty_period'] || '', Validators.required),
      hsnid: new FormControl(this.editfirstarray?.['hsnid'] || '', Validators.required),
      invoice_date: new FormControl(this.editfirstarray?.['invoice_date']?.slice(0, 10) || '', Validators.required),
      invoiceno: new FormControl(this.editfirstarray?.['invoiceno'] || '', Validators.required),
      vendorid: new FormControl(this.editfirstarray?.['vendorid'] || '', Validators.required),
      vendordetid: new FormControl(this.editfirstarray?.['vendordetid'] || '', Validators.required),
      stocktype: new FormControl(this.editfirstarray?.['stocktype'] || '', Validators.required),
      stockinid: new FormArray([])
    });
  }
}