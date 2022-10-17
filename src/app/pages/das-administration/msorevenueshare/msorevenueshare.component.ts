import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-msorevenueshare',
  templateUrl: './msorevenueshare.component.html',
  styleUrls: ['./msorevenueshare.component.scss']
})
export class MsorevenueshareComponent implements OnInit {
  submit: boolean = false; AddRevenueForm;
  constructor() { }
  addNas() {
    // console.log(this.AddRevenueForm.value)
  }

  ngOnInit(): void {
    this.createForm();
  }
  cancel() {
    this.createForm();

  }
  createForm() {
    this.AddRevenueForm = new FormGroup({
      headend: new FormControl('', Validators.required),
      operator_type: new FormControl('', Validators.required),
      operator_name: new FormControl('', Validators.required),
    });
  }
}
