import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService } from '../../_services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StockService } from '../../_services/stock.service';
import { HsnService } from '../../_services/hsn.service';
@Component({
  selector: 'ngx-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddstockComponent implements OnInit {
  submit: boolean = false; StockInForm; getvendorlist; getmodellist; locationlist; gethsn; editfirstarray;
  vendor; loc;; STB; listhead; editdata = {}; id; editflag = false; editable: boolean = false;
  materialArray;

  constructor(
    private _fb: FormBuilder,
    private hsn: HsnService,
    private headend: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private stock: StockService,
   // private boxtype: BoxtypeService
  ) { }
  async addstockIn() {
    this.submit = true;
    const invalid = [];
    const control = this.StockInForm.controls
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.StockInForm.invalid) {
      console.log('Invalid value -----', invalid);
      return;
    }
    let result = await this.stock.addstock(this.StockInForm.value);
    console.log('result in stock', result)
    if (result[0]['err_code'] == 0) {
      this.toast.success(result[0]['msg'])
      this.route.navigate(['/pages/inventory/liststock'])
    } else {
      this.toast.warning(result[0]['msg'])
    }


  }
  ngOnInit() {
    this.createForm();
    this.gethsnlistg();
    this.getHeadend();
    this.getModel();
  }
  async getVendor() {
    this.getvendorlist = await this.stock.getstockvendor({ hdid: this.StockInForm.value['hdid'] });
  }
  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({})

  }
  async getModel() {
    this.getmodellist = await this.stock.getstockmodel({});
  }
  async getlocation() {
    this.locationlist = await this.stock.getstocklocation({ vendorid: this.StockInForm.value['vendorid'] });

  }
  async gethsnlistg() {

    this.gethsn = await this.hsn.selecthsn({ hdid: this.StockInForm.value['hdid'] })
    console.log('hsn list', this.gethsn)
  }

  get stockinid(): FormArray {
    return this.StockInForm.get('stockinid') as FormArray;
  }

  addMaterial() {
    this.stockinid.push(this.createMaterial());
  }

  deleteMatField(index: number) {
    this.stockinid.removeAt(index);
  }
  changeclear(...data) {
    for (let i of data) {
      this.StockInForm.controls[i].setValue("");
    }
  }

  typeclearHeadend(val = "1") {
    this.changeclear('vendorid', 'vendordetid');
  }

  typeclearVendor(val = "1") {
    this.changeclear('vendordetid');
  }

  createMaterial(): FormGroup {

    return this._fb.group({

      boxmodelid: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required],
      total: [{ value: '', disabled: true }]
    });
  }

  onkeyupQty(event: any, index: number) {
    if (event.target.value != "") {
      var total = Number(this.StockInForm.value["stockinid"][index]["qty"]) * Number(this.StockInForm.value["stockinid"][index]["price"]);
      const controlArray = <FormArray>this.StockInForm.get('stockinid');
      controlArray.controls[index].get('total').setValue(total);
    }
  }
  createForm() {
    this.StockInForm = new FormGroup({
      hdid: new FormControl('', Validators.required),
      warranty_type: new FormControl('', Validators.required),
      warranty_period: new FormControl('', Validators.required),
      hsnid: new FormControl('', Validators.required),
      invoice_date: new FormControl('', Validators.required),
      invoiceno: new FormControl('', Validators.required),
      vendorid: new FormControl('', Validators.required),
      stocktype: new FormControl('', Validators.required),
      vendordetid: new FormControl('', Validators.required),
      stockinid: new FormArray([this.createMaterial()])
    });
  }
}
