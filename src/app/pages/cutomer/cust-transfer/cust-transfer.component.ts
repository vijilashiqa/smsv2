import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-cust-transfer',
  templateUrl: './cust-transfer.component.html',
  styleUrls: ['./cust-transfer.component.scss']
})
export class CustTransferComponent implements OnInit {
  loc: any = [[], []]; branch: any = [[], []]; head: any = [];
	TransForm; opt: any = [[], []]; stbdet: any = []; submit = false;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
		// this.getheadend(); let role = this.role.getroleval();
		// if (role < 699) {
		// 	this.TransForm.get('headend_from').setValue(this.role.getheadend());
		// 	this.TransForm.get('headend_to').setValue(this.role.getheadend());
		// 	this.getoperator(1);
		// 	this.getoperator(0);
		// }
		// if (role < 665) {
		// 	this.TransForm.get('operatorid_from').setValue(this.role.getuser());
		// 	this.get_loc_for_opt(0);
		// 	this.get_loc_for_opt(1);
		// }
	}

	getoperator(index, $event = '') {
		let head_id = index == 0 ? this.TransForm.value['headend_from'] : this.TransForm.value['headend_to'];
		if (head_id != '') {
			// this.user.getoperatorc({ head_id: head_id }).subscribe(result => {
			// 	if (result) {
			// 		this.opt[index] = result;
			// 	}
			// });
		}
	}

	getheadend() {
		// this.das.getheadend().subscribe(result => {
		// 	if (result) {
		// 		this.head = result;
		// 	}
		// });
	}

	get_loc_for_opt(index, $event = '') {
		let opt = index == 0 ? this.TransForm['value']['operatorid_from'] : this.TransForm['value']['operatorid_to'];
		if (opt != '') {
			// this.das.get_loc_for_opt({ id: opt }).subscribe(result => {
			// 	// console.log(result)
			// 	if (result) {
			// 		this.loc[index] = result;
			// 	}
			// });
		}
	}

	get_Branch_for_opt(index, $event = '') {
		let opt = index == 0 ? this.TransForm['value']['operatorid_from'] : this.TransForm['value']['operatorid_to'];
		let lang = index == 0 ? this.TransForm['value']['location_from'] : this.TransForm['value']['location_to'];
		if (opt != '' && lang != '') {
			// this.das.get_Branch_for_opt({ id: opt, loc_fk: lang }).subscribe(result => {
			// 	if (result) {
			// 		this.branch[index] = result;
			// 	}
			// });
		}
	}

	getSTB($event = '') {
		let user = this.TransForm.value['operatorid_from']
		if (user != '') {
			// this.stb.getstb({ id: user, pair: 1, like: $event }).subscribe(result => {
			// 	if (result) {
			// 		this.stbdet = result;
			// 	}
			// });
		}
	}

	custtransfer() {
		this.submit = true;
		if (this.TransForm.invalid) {
			return;
		}
		// this.cust.custtransfer(this.TransForm.value).subscribe(result => {
		// 	if (result) {
		// 		this.toastalert(result['msg'], result['status']);
		// 	}
		// });
	}

	// toastalert(msg, status = 0) {
	// 	const toast: Toast = {
	// 		type: status == 1 ? 'success' : 'warning',
	// 		title: status == 1 ? 'Success' : 'Failure',
	// 		body: msg,
	// 		timeout: 5000,
	// 		showCloseButton: true,
	// 		bodyOutputType: BodyOutputType.TrustedHtml,
	// 	};
	// 	this.alert.popAsync(toast);
	// }

	addressval() {
		this.TransForm.get('Installation').clearValidators();
		this.TransForm.get('Billing').clearValidators();
		if (!this.TransForm.value['sameasold']) {
			this.TransForm.get('Installation').setValidators([Validators.required]);
			this.TransForm.get('Billing').setValidators([Validators.required]);
		}
		this.TransForm.get('Installation').updateValueAndValidity();
		this.TransForm.get('Billing').updateValueAndValidity();
	}

	createForm() {
		this.TransForm = new FormGroup({
			operatorid_from: new FormControl('', Validators.required),
			headend_from: new FormControl('', Validators.required),
			location_from: new FormControl('', Validators.required),
			branch_from: new FormControl('', Validators.required),
			operatorid_to: new FormControl('', Validators.required),
			headend_to: new FormControl('', Validators.required),
			location_to: new FormControl('', Validators.required),
			branch_to: new FormControl('', Validators.required),
			sameasold: new FormControl(true),
			Installation: new FormControl(''),
			Billing: new FormControl(''),
			checkaddr: new FormControl(true),
			box_no: new FormControl('', Validators.required)
		});
	}
  }


