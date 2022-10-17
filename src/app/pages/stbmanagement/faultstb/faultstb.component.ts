import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-faultstb',
  templateUrl: './faultstb.component.html',
  styleUrls: ['./faultstb.component.scss']
})
export class FaultstbComponent implements OnInit {
  search: boolean = false;
  stbform;
  data;
  pager: any = {}; page: number = 1;
  pagedItems: any = [];

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.stbform = new FormGroup({
      headend: new FormControl(''),
      operator_type: new FormControl(''),
      operator_name: new FormControl(''),
      stb_id: new FormControl(''),
      vc_number: new FormControl(''),
      status: new FormControl(''),
      location: new FormControl(''),
      branch: new FormControl(''),
      fault_des: new FormControl(''),
      other_fault: new FormControl(''),
    });
  }

}
