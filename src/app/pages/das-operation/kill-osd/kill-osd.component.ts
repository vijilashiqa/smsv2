import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-kill-osd',
  templateUrl: './kill-osd.component.html',
 
})
export class KillOsdComponent implements OnInit {
  submit: boolean = false; ReportsForm;
  constructor(
    // private alert: ToasterService,
    private router: Router
  ) {
  }

  search() {
    this.submit = true;
  }

  

  ngOnInit(): void {
    {
      this.createForm();
    }
  }
  
    createForm() {
      this.ReportsForm = new FormGroup({
        vc_num: new FormControl('', Validators.required),
        port_num: new FormControl(''),
        msg: new FormControl(''),
      });
    }
  }
  


