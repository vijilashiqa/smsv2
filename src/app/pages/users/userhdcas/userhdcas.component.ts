import { Component, Input, OnInit } from '@angular/core';
// import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 import { CountryService, HeadendService } from '../../_services';
 import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 import { ToastrService } from 'ngx-toastr';
 import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorService } from '../../_services/operator.service';
@Component({
  selector: 'ngx-userhdcas',
  templateUrl: './userhdcas.component.html',
  styleUrls: ['./userhdcas.component.scss']
})
export class UserhdcasComponent implements OnInit {
modalHeader: string;
submit: boolean = false; userhdcas;editdatas;data='';checkedValdata;resellercheckre
item; result;id;result1;listhdcas;searchresell ='';checkedVal;resu
@Input() title: string;isMasterSel =false
 
constructor(
   private headend : HeadendService,
    public activeModal: NgbActiveModal,
    private toast: ToastrService,
    private operator : OperatorService,
  ){}

async ngOnInit(){
   
  this.createForm();
  console.log('Item----',this.item);
  this.onCheck();
  
}

async onCheck() {
  this.listhdcas = await this.operator.gethdcas({hdid: this.item.hdid , id : this.item.id});
  this.result = this.listhdcas[0];
  console.log("hd cas list", this.result)

}


checkhdcas(checked) {
  this.result.forEach(x => x.casstatus = checked)
  
}


isAllSelected() {
  this.isMasterSel = this.result.every(function(item:any) {
      return item.casstatus == true;
    })
  
}


async addhdcas() {
  this.submit = true;
  console.log('items============',this.item)
  if (!this.userhdcas.valid) {
    return;
  }
  let checkhdcas = this.result.filter(item => item.casstatus).map(item => item.hdcasid)
   this.userhdcas.value['id']=this.item.id;
  this.userhdcas.value['hdid']=this.item.hdid;
   this.userhdcas.value.hdcasid =checkhdcas;

     this.resu = await this.operator.assignusercas(this.userhdcas.value)  ;

    console.log('result,,,,,',this.resu)
    if (this.resu && this.resu['err_code'] == 1) {
        this.toast.success(this.resu['msg']);
        this.close();
      } else {
        this.toast.warning(this.resu['msg'])
        console.log('add...', this.userhdcas.value);
      }
}
close(){
console.log('Status========= close----------');
  this.activeModal.close();
}
async createForm() {
  this.userhdcas = new FormGroup({
    // hdcas: new FormControl(this.item? this.item['hdcas']:'', Validators.required)
  });
}
}

