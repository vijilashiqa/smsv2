import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pivotlist',
  templateUrl: './pivotlist.component.html',
  styleUrls: ['./pivotlist.component.scss']
})
export class PivotlistComponent implements OnInit {
  data; now: any = new Date();
  pager: any = {}; tot: any = [];
  pagedItems: any = [];
  page: number = 1; head: any = [];
  search: boolean; opt: any = [];
  head_opt = ''; status = '';
  limit: number = 25; value: any = '';
  headend: any = ''; sum: number;
  operator_name = '';
  from_date; to_date
  op_type = '';
  constructor() { }

  ngOnInit(): void {
    this.getheadend();
    this.getoperator();
  }
  initiallist() {
   
    
  }
  setPage() {
   

  }
  getdepositlist() {
   
  }

  getInvoiceTotal() {
  
  }




  getheadend() {
   
  }

  getoperator() {
   
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
