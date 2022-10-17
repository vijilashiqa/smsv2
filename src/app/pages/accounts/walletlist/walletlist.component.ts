import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-walletlist',
  templateUrl: './walletlist.component.html',
  styleUrls: ['./walletlist.component.scss']
})
export class WalletlistComponent implements OnInit {
  search: boolean = false; count = 0; now: any = new Date();
  data; head: any = []; opt: any = []; TransForm;
  pager: any = {}; operator_name = ''; loc = '';
  branch = ''; headend = ''; locitem: any = []; branchitem: any = [];
  pagedItems: any = []; status = '';
  page: number = 1; users: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  initiallist() {
    
  }

  getUserList(page) {
   
  }
  setPage() {
   
  }
  cancel() {
  
  }
  update() {
   

  }
  getheadend() {
    
  }

  getDistOrSubdist() {
   
  }
  getLcoOrSubdist() {
  
  }
  Download() {
    
  }


  createForm() {
    this.TransForm = new FormGroup({
      operatorid_from: new FormControl(''),
      opt_typefrom: new FormControl(''),
      opt_typeto: new FormControl(''),
      headend_from: new FormControl(''),
      operatorid_to: new FormControl(''),
      status: new FormControl(''),
    });
  }
}
