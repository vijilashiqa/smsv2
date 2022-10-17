import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-stbactdeact',
  templateUrl: './stbactdeact.component.html',
  styleUrls: ['./stbactdeact.component.scss']
})
export class StbactdeactComponent implements OnInit {
  data; search = false;
  pager: any = {}; page: number = 1;
  pagedItems: any = [];
  constructor() { }

  ngOnInit(): void {
    this.initiallist();
  }
  initiallist() {
    
  }
  list(page) {
    
  }
  setPage() {
   
  }

}


