import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.scss']
})
export class InvoicelistComponent implements OnInit {
  data; now: any = new Date();
  pager: any = {}; cas: any = [];
  pagedItems: any = [];
  page: number = 1; model_type = '';
  search: boolean; model: any = [];
  DepositForm; vc = ''; stbopt = ''; inv_type = ''; pack: any = [];
  head: any = []; opt: any = []; dtype = ''; from_edate = ''; package = '';
  operator_name = ''; from_date = ''; to_date = ''; to_edate = ''; op_type = '';
  head_opt = ''; status = ''; vcdet: any = []; stbdet: any = []; tot: any = {}; pack_type = '';
  broadcastamount; distamt; subdist; msoamt; taxamt; msodedamt; lcoamt;

  constructor() { }

  ngOnInit(): void {
  }
  initiallist() {
   
      }
   
  
  list() {
    
  }
  setPage() {
   
  }
  broadcastshare() {
    
  }
  msoshare() {
    
  }
  distshare() {
    
  }
  subdistshare() {
   
  }
  lcoshare() {
    
  }
  taxmat() {
   
  }
  msodeductamt() {
    
  }


  getheadend() {
    // console.log(this.operator_name)
    
  }

  getoperator() {
    // console.log(this.operator_name)
    
  }
  getstbmodel() {
    
  }

  getSTB() {
   

  }
  getcashead() {

    
  }
  getpack() {
    
  }

  getVc() {

  }
  Download() {
   
  }

}
