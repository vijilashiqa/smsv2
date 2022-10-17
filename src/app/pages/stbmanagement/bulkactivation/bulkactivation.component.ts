import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-bulkactivation',
  templateUrl: './bulkactivation.component.html',
  styleUrls: ['./bulkactivation.component.scss']
})
export class BulkactivationComponent implements OnInit {
  search: boolean = false; submit: boolean; bulkpack = [];
  bulkForm; selectedAll: boolean = false; opt: any = [];
  loc: any = []; branch: any = []; head: any = []; file: any;
  data; pager: any = {}; page: number = 1; arrayBuffer;
  pagedItems: any = []; bulk: any = []; failure: any = [];
  s = 0; f = 0;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.getheadend();
  }

  initiallist() {}
  list(page) {
    // console.log(this.page)
    
  }

  setPage() {
   
  }

  changeListener(file) {
    
  }

  filereader(file, callback) {
    
  }

  getoperator() {
  }

  getheadend() {
    
  }

  get_loc_for_opt() {
    
  }

  get_Branch_for_opt() {
    
  }

  packagebulk() {
   
  }
  selectAll(){

  }
  bulkactive(){

  }
Download(){}
  createForm() {
    this.bulkForm = new FormGroup({
      headendbox: new FormControl(''),
      headendpack: new FormControl(''),
      status: new FormControl('', Validators.required),
      lco_name: new FormControl(''),
      location: new FormControl(''),
      branch: new FormControl(''),
      act_de: new FormControl(''),
      paid: new FormControl('', Validators.required)
    });
  }
}
