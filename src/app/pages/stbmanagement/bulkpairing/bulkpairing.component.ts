import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bulkpairing',
  templateUrl: './bulkpairing.component.html',
  styleUrls: ['./bulkpairing.component.scss']
})
export class BulkpairingComponent implements OnInit {
  arrayBuffer: any; bulk: any = []; failure: any = [];
  submit: boolean; file: any; s = 0; f = 0; error: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  bulkpair() {}
  
  changeListener(file) {
    
  }

  filereader(f) {
    
  }

  Download() {
    
  }

}
