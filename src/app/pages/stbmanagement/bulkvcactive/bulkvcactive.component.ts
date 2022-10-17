import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bulkvcactive',
  templateUrl: './bulkvcactive.component.html',
  styleUrls: ['./bulkvcactive.component.scss']
})
export class BulkvcactiveComponent implements OnInit {
  arrayBuffer: any; bulk: any = []; failure: any = [];
  submit: boolean; file: any; s = 0; f = 0;

  constructor() { }

  ngOnInit(): void {

  }
  bulkpair() {}
  

  changeListener() {}
  filereader() {}
  Download() {}

}
