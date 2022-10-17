import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeadendService } from '../../_services';
import { StbmanagementService } from '../../_services/stbmanagement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngx-stbparing',
  templateUrl: './stbparing.component.html',
  styleUrls: ['./stbparing.component.scss']
})
export class StbparingComponent implements OnInit {

  submit: boolean = false; pairForm; listhead; listvc; checkpair
  @Input() title: string; listboxpair; result; getvc; pair_status
  constructor(
    private activemodel: NgbActiveModal,
    private headend: HeadendService,
    private toast: ToastrService,
    private route: Router,
    private stb: StbmanagementService) { }

  async ngOnInit() {
    await this.createForm();
    await this.getHeadend();
    // await this.boxparing();
    await this.vcparing();
  }

  async paring() {
    this.submit = true;
    const invalid = [];
    const control = this.pairForm.controls
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.pairForm.invalid) {
      console.log('Invalid value -----', invalid);
      // window.alert('Please fill the mandatory fields')
      return;
    }
    this.result = await this.stb.addstbpair(this.pairForm.value)
    console.log('result', this.result)
    if (this.result && this.result[0].err_code == 0) {
      this.toast.success(this.result[0]['msg']);
      this.route.navigate(['/pages/stbmanagement/stblist'])
    } else {
      this.toast.warning(this.result[0]['msg'])
    }
  }
  async boxparing() {
    this.listboxpair = await this.stb.getboxpair({ hdid: this.pairForm.value['hdid'] })
    console.log('listboxpair', this.listboxpair)
  }

  vcparing() {
    const [boxvc_data] = this.listboxpair?.filter(x => x.boxid == this.value['boxno'])
    console.log('vcid', boxvc_data.vcid, boxvc_data.pairflg);
    this.pair_status = boxvc_data.pairflg;
    this.listvc = [];
    if (boxvc_data.vcid) {
      console.log("boxdata@@@@@@@@", boxvc_data.vcid)
      this.listvc = [{ vcid: boxvc_data.vcid, vcno: boxvc_data.vcno }]
      console.log('listvc**********', this.listvc)
    } else {
      const data = []
      let vclist = this.listboxpair.filter(x => x.vcno !== 0 && x.vcno !== null).reduce((a, v) => {
        const value = { vcid: v.vcid, vcno: v.vcno }
        data.push(value)
        return data
      }, [])
      this.listvc = vclist
      console.log('vclist', vclist);
    }
  }

  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({})
    console.log(this.listhead)
  }

  close() {
    this.activemodel.close();
  }

  createForm() {
    this.pairForm = new FormGroup({
      hdid: new FormControl('', Validators.required),
      pairstatus: new FormControl(0, Validators.required),
      boxno: new FormControl('', Validators.required),
      vcid: new FormControl('', Validators.required),
    });
  }

  get value() {
    return this.pairForm.value
  }

}
