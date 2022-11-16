import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HeadendService, VendorService } from '../../_services';
import { BoxmodelService } from '../../_services/boxmodel.service';
import { BoxtypeService } from '../../_services/boxtype.service';
@Component({
  selector: 'ngx-createmodel',
  templateUrl: './addmodel.component.html',
  styleUrls: ['./addmodel.component.scss']
})
export class AddmodelComponent implements OnInit {

  modalHeader: string;
  submit: boolean = false; AddmodelForm;
  item; listhdcas
  state: any = []; district: any = []; city: any = []; listpincode: any; listhead; listmake; getstbtypeg;
  pincode: any = []; area; count; listarea; getstates; dist; citylist; editflag = false; editdata = {}
  @Input() title: string;
  keyword = 'name'
  constructor(private activemodel: NgbActiveModal,
    private headend: HeadendService,
    private vendorservices: VendorService,
    private boxmodel : BoxmodelService,
    private boxtype :BoxtypeService,
    private toast: ToastrService,  private route: Router,) { }

  ngOnInit(): void {
    console.log("item*********",this.item)
    this.createForm();
    this.getHeadend();
    if(this.item){
     
      this.getcashead();
    }
  
    this.getmake();
    this.getstbtype();
  }
  async Model() {
    this.submit = true;
    if (this.AddmodelForm.invalid) {
      return;
    }
    let method = this.item ? 'editboxmodel' : 'addboxmodel';
    if (this.item) this.AddmodelForm.value['bmid'] = this.item['bmid']
    let result = await this.boxmodel[method](this.AddmodelForm.value)
    if(result[0]['err_code'] == 0){
      this.toast.success(result[0]['msg'])
      this.close();
      this.route.navigate(['/pages/inventory/modellist'])
    }else{
      this.toast.warning(result[0]['msg'])
    }
  }
  async getHeadend($event = '') {
    console.log('event',event)
    this.listhead = await this.headend.getHeadend({ })
    console.log(this.listhead)
  }
  get val() {
    return this.AddmodelForm.value
  }
  async getmake($event = '') {
    this.listmake = await this.vendorservices.getvendor({ hdid :this.AddmodelForm.value['hdid']});
  }
  async getcashead($event = '') {
    this.listhdcas = await this.headend.listHdcas({ hdid :this.AddmodelForm.value['hdid'] , like: $event })
    this.listhdcas = this.listhdcas[0];
    console.log('zxcxc',this.listhdcas)
  }
  async getstbtype() {
    this.getstbtypeg = await this.boxtype.selectboxtype({ hdid :this.AddmodelForm.value['hdid']})
    console.log('stb type',this.getstbtypeg)
  }
  close() {
    this.activemodel.close();
  }


  changeclear(...data) {
    for (let i of data) {
      this.AddmodelForm.controls[i].setValue("");
    }
  }

  typeclearHeadend(val = "1") {
    this.changeclear('hdcasid','vendorid');
  }


  typeclearcas(val = "1") {
    this.changeclear('vendorid');
  }
  createForm() {
    this.AddmodelForm = new FormGroup({
      hdid: new FormControl(this.item ? this.item['hdid'] : '', Validators.required),
      hdcasid: new FormControl(this.item ? this.item['hdcasid'] : '', Validators.required),
      modelname: new FormControl(this.item ? this.item['modelname'] : '', Validators.required),
      vendorid: new FormControl(this.item ? this.item['vendorid'] : '', Validators.required),
      chiptype: new FormControl(this.item?.chiptype.toString()),
      status: new FormControl(true),
      stbtypeid: new FormControl(this.item ? this.item['stbtypeid'] : '', Validators.required),
    });
  }

}
