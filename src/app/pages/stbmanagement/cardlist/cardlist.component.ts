import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  search: boolean = false; data; head: any = []; pager: any = {};
  page: number = 1; opt: any = []; pagedItems: any = [];
  locitem: any = []; branchitem: any = []; count = 0;
  vcdet: any = []; model: any = []; limit = 25;

  operator_name = ''; loc = ''; branch = ''; headend = '';
  model_opt = ''; stbopt = ''; vc = ''; status = '';
  from_date = ''; to_date = ''; pair = '';

  constructor() { }

  ngOnInit(): void {
    this.initiallist();
    this.getoperator();
    this.getheadend();
    this.getModel();
  }
  initiallist() {
    
  }
  list() {
    // console.log(this.page)
    
  }
  setPage() {
    
  }

  Edit_stb() {
    
  }
  getheadend() {
  
  }

  getoperator() {
    
  }

  getlocation() {
    
  }

  getBranch() {
    
  }

  getModel() {
   
  }
  activeVC() {
    
  }


  getVc() {

   
  }

}
