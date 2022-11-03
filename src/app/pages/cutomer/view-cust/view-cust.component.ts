import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagerService } from '../../_services';

@Component({
  selector: 'ngx-view-cust',
  templateUrl: './view-cust.component.html',
  styleUrls: ['./view-cust.component.scss']
})
export class ViewCustComponent implements OnInit {
//  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = '#dd0031';
  public secondaryColour = '#006ddd';
  public loading = false;
  submit: boolean; cust_id; cust_det = {};
  black_submit: boolean; stbdetails: any = [];
  transfer_submit: boolean; oldinvoicepagedItems: any = [];
  fingerprint_submit: boolean; oldinvoicecount = 0;
  msg_submit: boolean; extendedinvoice: any = []; extendedinvoicecount = 0;
  TransferForm; old_invoice_list: any = []; activeinvoicecount = 0;
  fingerprint; totalIamount; totalOamount; stbmsg; pager: any = {};
  BlacklistForm; array: any = []; stbdet: any = []; model: any = []; pagerss: any = {};
  OTPflg: boolean = false; invoice_list: any = []; stb_type: any = [];
  page: number = 1; pagedItems: any = []; limit: number = 10;
  vcdet: any = []; bpack: any = []; pagers: any = {}; extendedpagedItems: any = [];
  BGColor = [
    { id: 0, name: 'black' },
    { id: 1, name: 'white' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'purple' },
    { id: 5, name: 'brown' },
    { id: 6, name: 'transparent' },
    { id: 7, name: 'dark red' },
    { id: 8, name: 'dark green' },
  ];
  TextColor = [
    { id: 0, name: 'black' },
    { id: 1, name: 'white' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'purple' },
    { id: 5, name: 'brown' },
    { id: 6, name: 'transparent' },
    { id: 7, name: 'dark red' },
    { id: 8, name: 'dark green' },
  ];
  font = [];
  confirmationDialogService: any;
  constructor(
    private router: Router,
   // private nasmodel: NgbModal,
    public pageservice: PagerService,


  ) {
    for (var i = 0; i <= 100; i++) {
      this.font.push({ id: i, name: 'font-' + i });
    }
    this.cust_id = JSON.parse(localStorage.getItem('cust_data'));
    console.log("DFGDFGDFGDFGDS",this.cust_id)

  }

  ngOnInit() {
   this.createForm();
    
  }

  transfer(){}
  

  sendfingerprint(){

  }

  sendmsg(){
    
  }

  createForm() {
    this.fingerprint = new FormGroup({
      Time: new FormControl('', Validators.required),
      xcord: new FormControl(''),
      ycord: new FormControl(''),
      fp_text_size: new FormControl(20),
      fp_bg_color: new FormControl(1),
      fp_text_color: new FormControl(0),
      fp_overt: new FormControl(''),
      Schedule: new FormControl(''),
      duration: new FormControl('', [Validators.required, Validators.max(99999999999)]),
      repetition: new FormControl(1, [Validators.required, Validators.max(999)]),
      intervals: new FormControl(0, [Validators.required, Validators.max(99999999999)]),
      fp_type: new FormControl(1),
    });
    this.stbmsg = new FormGroup({
      Time: new FormControl('', Validators.required),
      fp_text_size: new FormControl(20),
      fp_bg_color: new FormControl(1),
      fp_text_color: new FormControl(0),
      Schedule: new FormControl(''),
      duration: new FormControl('', [Validators.max(99999999999)]),
      repetition: new FormControl(1, [Validators.required, Validators.max(999)]),
      intervals: new FormControl(0, [Validators.required, Validators.max(99999999999)]),
      msg_type: new FormControl(1),
      msg_title: new FormControl('', [Validators.maxLength(30)]),
      msg: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      osd_type: new FormControl(0),
      scrool_type: new FormControl(''),

    });
    this.TransferForm = new FormGroup({
      reason: new FormControl('', Validators.required),
      amount: new FormControl(''),
      model: new FormControl(''),
      new_stb: new FormControl(''),
      remarks: new FormControl('', Validators.required),
      stbtype: new FormControl({ value: '', disabled: true }),
      vcnumber: new FormControl(''),
      hold_period: new FormControl(''),
      rep_of: new FormControl(3),
      note: new FormControl('', Validators.required),
      swap_stb: new FormControl(''),

    });
    this.BlacklistForm = new FormGroup({
      reason: new FormControl('', Validators.required),
      otp_type: new FormControl(1),
      otp: new FormControl('', Validators.required)
    });
  }

//   cancelinvoice(item) {
//     // console.log(item)
//     const activeModal = this.nasmodel.open(CancelInvoice, { size: 'sm', container: 'nb-layout' });
//     activeModal.componentInstance.modalHeader = 'Cancel Invoice';
//     activeModal.componentInstance.item = item;

//     activeModal.result.then((data) => {

//       this.getInvoice();
//       this.getextendedinvoice();
//       this.getcust();
//     }, (reason) => {
//       return;
//     });
//   }
// }

}