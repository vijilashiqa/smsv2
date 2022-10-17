import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-walletshare',
  templateUrl: './walletshare.component.html',
  styleUrls: ['./walletshare.component.scss']
})
export class WalletshareComponent implements OnInit {
  TransForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
		this.getheadend();
  }
  getheadend() {
	
	}

	getDistOrSubdist() {
	
	}

	getvalue() {

  }
	shareamt() {
	
	}
	getLcoOrSubdist() {
		
	}

	walletamt() {
	
	}

	


	createForm() {
		this.TransForm = new FormGroup({
			operatorid_from: new FormControl('', Validators.required),
			opt_typefrom: new FormControl('', Validators.required),
			opt_typeto: new FormControl('', Validators.required),
			headend_from: new FormControl('', Validators.required),
			operatorid_to: new FormControl('', Validators.required),
			amt: new FormControl('', Validators.required),
			remarks: new FormControl('', Validators.required),
		});
	}
}
