import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-operator-setting-list',
  templateUrl: './operator-setting-list.component.html',
  styleUrls: ['./operator-setting-list.component.scss']
})
export class OperatorSettingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.listCas();
  }
  listCas() {

  }
}
