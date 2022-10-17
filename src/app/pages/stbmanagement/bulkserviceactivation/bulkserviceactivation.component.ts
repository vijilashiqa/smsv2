import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-bulkserviceactivation',
  templateUrl: './bulkserviceactivation.component.html',
  styleUrls: ['./bulkserviceactivation.component.scss']
})
export class BulkserviceactivationComponent implements OnInit {
  
    search: boolean = true; submit: boolean; bulkpack = []; stbvc: any = [];
    bulkForm; selectedAll: boolean = false; opt: any = []; packe: any = [];
    head: any = []; data; pager: any = {}; page: number = 1;
    arrayBuffer; pagedItems: any = []; bulk: any = []; failure: any = [];
    custID: any = [];
  constructor() { }

  ngOnInit(): void {this.createForm();
    this.getheadend();
    
      this.getoperator();
  
      this.getPackage();
      this.getcustomer();
      this.getstbvc();
  }
  list(page) {
   
  }

  setPage() {
   
  }

  getheadend() {
    
  }

  getoperator() {
    
  }

  getcustomer() {
    
  }

  getstbvc() {
    

  }

  getPackage() {
  }

  selectAll() {
    
  }

  changes() {
    
  }
  initiallist() {
    


  }

  StbBulkExtenttion() {
    
  }

 
  createForm() {
    this.bulkForm = new FormGroup({
      headend: new FormControl(''),
      product_type: new FormControl(''),
      lco_name: new FormControl(''),
      package: new FormControl(''),
      sn_no: new FormControl(''),
      vc_no: new FormControl(''),
      cust_id: new FormControl(''),
      from_date: new FormControl(''),
      to_date: new FormControl(''),
      quantity: new FormControl(''),
    });
  }

}
