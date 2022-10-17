import { Component, Input, OnInit } from '@angular/core';
// import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 import { CountryService, HeadendService } from '../../_services';
 import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngx-userhdcas',
  templateUrl: './userhdcas.component.html',
  styleUrls: ['./userhdcas.component.scss']
})
export class UserhdcasComponent implements OnInit {
modalHeader: string;
submit: boolean = false; userhdcas;editdatas;
item; result;id;result1;listhdcas
@Input() title: string;
 
constructor(
   private headend : HeadendService,
    public activeModal: NgbActiveModal,
    private toast: ToastrService,
  ){}

async ngOnInit(){
   
  this.createForm();
  console.log('Item----',this.item);
  // if(this.item){
  //   await this.editgenre()
  // }

  this.getcashead();
  
}


async getcashead($event = "") {
  this.listhdcas = await this.headend.listHdcas({  });
  this.listhdcas = this.listhdcas[0];
  console.log("hd cas list", this.listhdcas);
}



checkAllCheckBox(ev) {
  // console.log('Check All event', ev);

  this.listhdcas[0].forEach(x => x.checked = ev.target.checked);
  // console.log('Data',this.listhdcas);

}


isAllCheckBoxChecked() {
  if (this.listhdcas && this.listhdcas[0]) {
    return this.listhdcas[0].every(x => x.checked)
  }
}
async addhdcas() {
  // this.submit = true;
  // console.log('items============',this.item)
  // if (!this.userhdcas.valid) {
  //   return;
  // // }
  // let method = this.item ? 'editcountrygeo' : 'addcountrygeo'
  // console.log('updatelist', method);
  // if (this.item) this.userhdcas.value['country_pk'] = this.item['country_pk']
  // console.log('countyr_pk========',this.item)
  // let result = await this.country[method](this.userhdcas.value)
  // if (result && result['status'] == 1) {
  //   this.toast.success(result['msg']);
  //   this.close();
  // } else {
  //   this.toast.warning(result['msg'])
  //   // console.log('add...', this.userhdcas.value);
  // }




}

close(){
console.log('Status========= close----------');
  this.activeModal.close();
}
async createForm() {
  this.userhdcas = new FormGroup({
    hdcas: new FormControl(this.item? this.item['hdcas']:'', Validators.required)
  });
}
}

