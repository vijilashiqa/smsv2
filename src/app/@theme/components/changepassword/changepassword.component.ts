import 'style-loader!angular2-toaster/toaster.css';
import { Component, Input, OnInit } from '@angular/core';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { RoleservicesService } from '../../../pages/_services';
import { RoleusersevicesService } from '../../../pages/_services/roleusersevices.service';
@Component({
  selector: 'ngx-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  submit: boolean = false; changePassword; datas; id;item

  @Input() title: string;
  constructor(

    public activeModal: NgbActiveModal,
    private alert: ToasterService,
    private role :RoleusersevicesService,
    ) {
      this.item = JSON.parse(localStorage.getItem('userinfo'));
      
    }

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit() {
    this.createForm();
  }

  async changepaswd() {
    if (this.changePassword.invalid || this.changePassword.value['Password'] != this.changePassword.value['CPassword']) {
      this.submit = true;
      return;
    }

    this.changePassword.value['id'] = this.item.id;
    const md5 = new Md5;
    this.changePassword.value['password_en'] = md5.appendStr(this.changePassword.value['Password']).end();
    console.log("changepaswd",this.changePassword.value)

    // if (this.role.getroleid() != 111) {
    //   let result = await this.ser.changeadminpwd(this.changePassword.value)
    //   this.datas = result;
    //   // console.log(result);
    //   const toast: Toast = {
    //     type: result['status'] == 1 ? 'success' : 'warning',
    //     title: result['status'] == 1 ? 'Success' : 'Failure',
    //     body: result['msg'],
    //     timeout: 5000,
    //     showCloseButton: true,
    //     bodyOutputType: BodyOutputType.TrustedHtml,
    //   };
    //   this.alert.popAsync(toast);
    //   if (result['status'] == 1) {
    //     this.activeModal.close();
    //     setTimeout(() => this.router.navigateByUrl('/auth/login'), 2500);
    //   }
    // }
    // if (this.role.getroleid() == 111) {
    //   let result = await this.custser.changeprofilepwd(this.changePassword.value)
    //   this.datas = result;
    //   // console.log(result);
    //   const toast: Toast = {
    //     type: result['status'] == 1 ? 'success' : 'warning',
    //     title: result['status'] == 1 ? 'Success' : 'Failure',
    //     body: result['msg'],
    //     timeout: 5000,
    //     showCloseButton: true,
    //     bodyOutputType: BodyOutputType.TrustedHtml,
    //   };
    //   this.alert.popAsync(toast);
    //   if (result['status'] == 1) {
    //     this.activeModal.close();
    //     setTimeout(() => this.router.navigateByUrl('/auth/login'), 2500);
    //   }
    // }

  }

  createForm() {
    this.changePassword = new FormGroup({
      Password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$')]),
      CPassword: new FormControl('', Validators.required)
    });
  }
}