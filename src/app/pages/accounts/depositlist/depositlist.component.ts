import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-depositlist',
  templateUrl: './depositlist.component.html',
  styleUrls: ['./depositlist.component.scss']
})
export class DepositlistComponent implements OnInit {
  data; now: any = new Date();
  pager: any = {}; tot: any = [];
  pagedItems: any = [];
  page: number = 1; head: any = [];
  search: boolean; opt: any = [];
  DepositForm; head_opt = '';
  limit: number = 25;
  order: any = []; headend: any = '';
  operator_name = ''; status = '';
  from_date; to_date
  deposit_type = ''; paymode = '';
  order_id; amt; op_type = '';

  constructor() { }

  ngOnInit(): void {
    this.initiallist();
    this.getheadend();
    this.getoperator();
  }
  initiallist() {
    // console.log(this.DepositForm.value)
    
  }
  getdepositlist() {
  
  }

  setPage() {
    
  }


  getheadend() {
   
  }

  getoperator() {
    
  }
  getorderid() {
   
  }


  Download() {
  }


  editdeposit() {
   
  }

  Addpayment() {
   
  }

  Cancelpayment() {
    
  }

  view() {
   
  }

  failed() {
    
  }

}
