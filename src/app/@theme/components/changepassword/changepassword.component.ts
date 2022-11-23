import 'style-loader!angular2-toaster/toaster.css';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { OperatorService } from '../../../pages/_services/operator.service';
import { ToastrService } from 'ngx-toastr';
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
    private toast: ToastrService,
    private router: Router,
    private operator :OperatorService,
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
      let result = await this.operator.resetpassword(this.changePassword.value)
      console.log('reset passwird ******',result)
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]["msg"]);
        this.router.navigate(["/auth/logout"]);
      } else {
        this.toast.warning(result[0]["msg"]);
      }
  }

  createForm() {
    this.changePassword = new FormGroup({
      Password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$')]),
      CPassword: new FormControl('', Validators.required)
    });
  }
}