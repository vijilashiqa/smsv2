import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-headendedit',
  templateUrl: './headendedit.component.html',
  styleUrls: ['./headendedit.component.scss']
})
export class HeadendeditComponent implements OnInit {
  submit: boolean; head_id: any = [];
  EditheadendForm; editdata: any = ''; country: any = [];
  state: any = []; district: any = []; city: any = [];
  pincode: any = []; area: any = []; editheadend;

  constructor() 
  {
    this.head_id = JSON.parse(localStorage.getItem('headid'));
   }

  
    EditHeadend() {
      this.submit = true;
      if (this.EditheadendForm.invalid) {
        return;
      }
      this.EditheadendForm.value['headend_pk'] = this.head_id;
      // this.das.edit_headend(this.EditheadendForm.value).subscribe(result => {
        // console.log(result);
      //   if (result) {
      //     this.editheadend = result;
      //     const toast: Toast = {
      //       type: result['status'] == 1 ? 'success' : 'warning',
      //       title: result['status'] == 1 ? 'Success': 'Failure',
      //       body: result['msg'],
      //       timeout: 5000,
      //       showCloseButton: true,
      //       bodyOutputType: BodyOutputType.TrustedHtml,
      //     };
      //     this.alert.popAsync(toast);
      //     if (result['status'] == 1)
      //       this.router.navigate(['/pages/headend/headendlist'])
      //   }
      // });
    }
  
    ngOnInit() {
      this.createForm();
      this.getheadendedit();
      this.getCountry();
      this.getpin();
    }
  
    getheadendedit() {
      // this.das.getheadendedit({ head_id: this.head_id }).subscribe(result => 
        {
        // this.editdata = result;
        this.createForm();
        this.getstate();
        this.getcity();
        this.getdistrict();
        this.getarea();
      };
    }
  
    getCountry() {
 
      
    }
  
    getstate() 
    {
      // let country = this.EditheadendForm.value['country'];
      // if (country != '') {
      //   this.geo.getstate({ country_fk: country }).subscribe(result => {
      //     if (result) {
      //       this.state = result;
      //     }
        
      
      }
    
    
    getdistrict() 
    {
      // let state_id = this.EditheadendForm.value['state'];
      // if (state_id != '') {
      //   this.geo.getdistrict({ state_id: state_id }).subscribe(result => {
      //     if (result) {
      //       this.district = result;
      //     }
      //   });
      // }
    }
  
    getcity() {
      let district = this.EditheadendForm.value['district'];
      if (district != '') {
        // this.geo.getcity({ district_id: district }).subscribe(result => 
        //   {
        //   if (result) {
        //     this.city = result;
        //   }
        // });
      }
    }
  
    getarea() {
      let city = this.EditheadendForm.value['City'];
      let pin = this.EditheadendForm.value['pin'];
      if (city != '' && pin != '') {
        // this.geo.getarea({ city_id: city, pincode_id: pin }).subscribe(result => 
        //   {
        //   if (result) {
        //     this.area = result;
        //   }
        // })
      }
    }
    getpin() {
      // this.geo.getpincode().subscribe(result => {
      //   if (result) {
      //     this.pincode = result;
      //   }
      // });
    }
  
    createForm() {
      this.EditheadendForm = new FormGroup({
        headendname: new FormControl(this.editdata['headend_name'], Validators.required),
        headendid: new FormControl(this.editdata['headend_id'], Validators.required),
        Mobile: new FormControl(this.editdata['mobile_no'], [Validators.required, Validators.pattern('^[0-9]{10}$')]),
        country: new FormControl(this.editdata['country_fk'], Validators.required),
        pin: new FormControl(this.editdata['pincode'], [Validators.required]),
        state: new FormControl(this.editdata['state_fk'], Validators.required),
        area: new FormControl(this.editdata['area_fk'], Validators.required),
        district: new FormControl(this.editdata['district_fk'], Validators.required),
        City: new FormControl(this.editdata['city_fk'], Validators.required),
        Installation: new FormControl(this.editdata['addr'], Validators.required),
        Email: new FormControl(this.editdata['email'], [Validators.required, Validators.pattern("[0-9 A-Z a-z ,.`!@#$%^&*]*[@]{1}[a-z A-Z]*[.]{1}[a-z A-Z]{2,3}")]),
        descr: new FormControl(this.editdata['desc']),
        status: new FormControl(this.editdata['status'] == 1 ? true : false)
      });
    }
  

}
