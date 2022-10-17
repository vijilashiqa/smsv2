import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import * as ɵngcc0 from '@angular/core';
@Component({
  selector: 'ngx-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.scss']
})
export class LogincComponent implements OnInit {
  protected service: NbAuthService;
  protected options: {};
  protected cd: ChangeDetectorRef;
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  user: any;
  constructor(auth: NbAuthService, location: Location) { }

  static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAuthComponent, never>;
  static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbAuthComponent, "nb-auth", never, {}, {}, never, never>;
  ngOnInit(): void {
  }

  resetPass(){

  }
}
