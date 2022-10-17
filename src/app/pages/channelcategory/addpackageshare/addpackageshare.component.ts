import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-addpackageshare',
  templateUrl: './addpackageshare.component.html',
  styleUrls: ['./addpackageshare.component.scss']
})
export class AddpackageshareComponent implements OnInit {
  AddPackageshareForm; package: any; submit: boolean = false;
	opt: any = []; loc: any = []; branch: any = [];


  constructor(private _fb: FormBuilder,) { }
  createForm() {
		this.AddPackageshareForm = new FormGroup({
			package: new FormControl('', Validators.required),
			operator: new FormControl('', Validators.required),
			headend: new FormControl('', Validators.required),
			mso: new FormControl('', Validators.required),
			dist: new FormControl('', Validators.required),
			subdist: new FormControl('', Validators.required),
			lco: new FormControl('', Validators.required),
			mso_price: new FormControl('', Validators.required),
			lco_price: new FormControl('', Validators.required),

		});
	}

	getpack() {
	
	}

	getoperator() {
	
	}

	ngOnInit() {
		this.createForm();
		this.getpack();
	}

	addPackShare() {
		this.submit = true;
		if (this.AddPackageshareForm.invalid) {
			return;
		}
		let opt = this.AddPackageshareForm.get('materialDetails')['controls'];
		var status = false;
		opt.forEach(item => {
			var mso = parseInt(item.value['mso']),
				lco = parseInt(item.value['lco']),
				dist = item.value['dist'] ? parseInt(item.value['dist']) : 0,
				sub = item.value['subdist'] ? parseInt(item.value['subdist']) : 0;
			// console.log(mso,lco,dist,sub)
			status = (mso + lco + dist + sub) != 100;
		});
		
		let price = this.AddPackageshareForm.get('materialDetails')['value'];
		for (var i = 0; i < price.length; ++i) {
			for (var j = 0; j < price.length; ++j) {
				if (i != j) {
				
					
				}
			}
		}
		
	}


	getusershare(index) {
		let opt = this.AddPackageshareForm.get('materialDetails')['controls'][index].value['operator'],
			ctr = this.AddPackageshareForm.get('materialDetails')['controls'][index]['controls'];

		ctr['dist'].enable();
		ctr['subdist'].enable();
		ctr['subdist'].clearValidators();
		ctr['dist'].clearValidators();
		if (opt) {
		
		}
		ctr['dist'].updateValueAndValidity();
		ctr['subdist'].updateValueAndValidity();

	}


	get materialDetails(): FormArray {
		return this.AddPackageshareForm.get('materialDetails') as FormArray;
	}

	addMaterial() {
		this.materialDetails.push(this.createMaterial());
	}

	deleteMatField(index: number) {
		this.materialDetails.removeAt(index);
	}

	createMaterial(): FormGroup {
		return this._fb.group({
			operator: ['', Validators.required],
			location: ['', Validators.required],
			branch: ['', Validators.required],
			mso: [0, [Validators.required]],
			dist: [0],
			subdist: [0],
			lco: [0, [Validators.required]],
			mso_price: [''],
			lco_price: ['']
		});
	}

  

}
