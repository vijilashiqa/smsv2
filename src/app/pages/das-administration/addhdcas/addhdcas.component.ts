import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService } from '../../_services';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'ngx-addhdcas',
  templateUrl: './addhdcas.component.html',
  styleUrls: ['./addhdcas.component.scss']
})
export class AddhdcasComponent implements OnInit {
  submit: boolean; listhead; getcas;addcass;editable: boolean = false; editdata = {};id; editflag = false;
  AddCASForm;
  constructor(private headend: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,) { }

  async ngOnInit() {
    await this.createForm();
    await this.getHeadend();
    await this.GetCas();
    this.id = this.aRoute.snapshot.queryParams.id
    if (this.id) {
      console.log('iddddddddddddddddddddddd',this.id)
      this.editable = true
      this.editflag = true;
      await this.edit();
      this.clearValidation();
      await this.createForm();
      await this.getHeadend();
      await this.GetCas();
    }

    } 
  

    clearValidation() {
      this.AddCASForm.get('ip').clearValidators();
      this.AddCASForm.get('ip').updateValueAndValidity();
    }


  async getHeadend($event = '') {

    this.listhead = await this.headend.getHeadend({ like: $event })
    console.log(this.listhead)
  }


  async GetCas($event = '') {

    this.getcas = await this.headend.getcas({ like: $event })
    console.log(this.getcas)

  }

 async addCas(){
  this.submit = true;
  console.log('add...', this.val);
  
  const invalid = [];
  const control = this.AddCASForm.controls
  for (const name in control) {
    if (control[name].invalid) {
      invalid.push(name);
    }
  }
  if (this.AddCASForm.invalid ) {
    console.log('Invalid value -----',invalid);
//window.alert('Please fill mandatory fields');
    return;
  }
  
  console.log('add...', this.val);
  let method = this.id ? 'edithdcas' : 'addhdcas'
  console.log('updatelist', method);
  if (this.id) this.AddCASForm.value['id'] = this.id
  let result = await this.headend[method](this.AddCASForm.value)
  if (result && result[0].err_code == 0) {
    this.toast.success(result[0]['msg']);
    this.route.navigate(['pages/das-administration/hdcaslist'])
  } else {
    this.toast.warning(result[0]['msg'])
    console.log('add...', this.val);
  }
  }
  

async edit(){

  console.log('edit herer')
  this.editdata = await this.headend.gethdcasedit({ id: this.id });
  console.log('editdata .....', this.editdata)

}

  get val(){
    return this.AddCASForm.value;
  }

  createForm() {
    this.AddCASForm = new FormGroup({
      hdid: new FormControl(this.editdata['hdid'] || '', Validators.required),
      caslid: new FormControl(this.editdata['caslid'] ||'', Validators.required),
      casid: new FormControl(this.editdata['casid'] ||'', Validators.required),
      smsidate: new FormControl(this.editdata?.['smsidate']?.slice(0,10) ||'', Validators.required),
      casidate: new FormControl(this.editdata?.['casidate']?.slice(0,10) ||'', Validators.required),
      ip: new FormControl(this.editdata['ip'] || '', [Validators.required, Validators.pattern('^(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])[.]{1}(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])[.]{1}(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])[.]{1}(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])$')]),
      port: new FormControl(this.editdata['port'] ||'', Validators.required)
    });
  }

}
