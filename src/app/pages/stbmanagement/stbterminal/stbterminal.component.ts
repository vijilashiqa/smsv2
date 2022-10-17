import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-stbterminal',
  templateUrl: './stbterminal.component.html',
  styleUrls: ['./stbterminal.component.scss']
})
export class StbterminalComponent implements OnInit {
  arrayBuffer: any; bulk: any = []; failure: any = [];
  submit: boolean = false; AddterminalForm; head: any = []; cas: any = [];
  opt: any = []; stbdet: any = []; search: boolean = false; pager: any = {};
  page: number = 1; pagedItems: any = []; limit: number = 25; count = 0; data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.getheadend();
    this.getoperator();
  }


  getStbList(page) {
   
  }
  setPage() {
   
  }
  getSTB($event = '') {

    // console.log('qdewrw',$event)
    
  }

  checkAll(checked) {
    this.data.forEach(x => x.state = checked)
  }

  uploadcard() {
    
    
  }
  Download(){}

 

  getheadend() {
   
  }

  getoperator() {
    // console.log($event)
   
  }
  getstbter(){}


  getcashead() {
   
  }
  createForm() {
    this.AddterminalForm = new FormGroup({
      headend: new FormControl('', Validators.required),
      cas_id: new FormControl('', Validators.required),
      tcmd: new FormControl('', Validators.required),
      cstatus: new FormControl('1'),
      stb_no: new FormControl(''),
      operator: new FormControl(''),
      date: new FormControl(''),

    });
  }
}
