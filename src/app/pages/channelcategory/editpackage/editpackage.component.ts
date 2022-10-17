import { Component, OnInit, ViewChild } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeadendService, BroadcasterService, ChannelService, PackageService } from '../../_services';
// import { ITreeOptions } from 'angular-tree-component';
import { toJS } from "mobx";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Console } from 'console';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import { ITreeOptions } from '@circlon/angular-tree-component';
import { PackagechannelComponent } from '../packagechannel/packagechannel.component';
@Component({
  selector: 'ngx-editpackage',
  templateUrl: './editpackage.component.html',
  styleUrls: ['./editpackage.component.scss']
})
export class EditpackageComponent implements OnInit {
  @ViewChild('tree') public tree;
  cas: any = []; searchalcart: string; searchaddon: string;
  searchbase: string; baseBack = ''; listhead; listbroadaterr
  opt: any = []; loc: any = []; branch: any = []; package
  nodes: any = []; Getchannel; broadcaster: any = []; listhdcas
  bpack: any = ''; addonpack: any = ''; alacartepack: any = '';
  submit: boolean; casdata; getbundle; id; editdata; addonpackids;
  EditPackageForm; modalRef: BsModalRef; checckbundle: any = '';
  addpackagevalues;
  treeOptions: ITreeOptions = {
    useCheckbox: true
  };

  constructor(private _fb: FormBuilder, private headend: HeadendService, private toast: ToastrService,
    private broadcast: BroadcasterService,
    private channel: ChannelService,
    private packageser: PackageService,
    private modal: NgbModal,
    private route: Router,
    private aRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.id = this.aRoute.snapshot.queryParams['id'];
    this.edit()
    this.createForm();
    this.getHeadend();
    this.getbroadcaster();
    this.getcas();
    this.getchannel();
    // this.getblundledata();

  }

  async getcas($event = '') {
    this.listhdcas = await this.headend.listHdcas({ like: $event })
    this.listhdcas = this.casdata = this.listhdcas[0]
  }


  async edit() {
    this.editdata = await this.packageser.editdatapackage({ packid: this.id });
    console.log('editdata .....', this.editdata)
    await this.createForm();
    this.getbroadcaster();
    if (this.editdata['packtype'] != 3) this.getchannel();
    this.checckbundle = '[' + this.editdata['bundlepack'] + ']';
    console.log('Bundle pack', this.checckbundle);
    await this.getblundledata();
    this.bundleedit();

  }
  bundleedit() {
    if (this.bpack) {
      console.log('base', this.bpack, 'add', this.addonpack, 'al', this.alacartepack);
      let [basePackId] = this.bpack.filter(item => this.checckbundle.includes(item.packid)).map(item => item.packid)
      this.baseBack = basePackId
      this.addonpack.filter(item => item.state = this.checckbundle.includes(item.packid))
      this.alacartepack.filter(item => item.state = this.checckbundle.includes(item.packid))

    }
  }

  async getbroadcaster() {
    this.listbroadaterr = await this.broadcast.listbroadcaster({ hdid: this.val['hdid'] })
    this.listbroadaterr = this.listbroadaterr[0]
  }

  getoperator() {
  }
  getpack() {
  }
  checkaddonpack(checked) {
    this.addonpack.forEach(x => x.state = checked)
  }
  checkalpack(checked) {
    this.alacartepack.forEach(x => x.state = checked)
  }
  async getchannel() {
    let result = await this.channel.getchannel_for_pack({ hdid: this.EditPackageForm.value['hdid'], bcid: this.EditPackageForm.value['bcid'] }).toPromise()
    if (result) {
      this.Getchannel = result;

      let temp = [], temp1 = [];
      let total = result['length'];
      for (var i = 0; i < total; i++) {
        let lang = result[i]['langname'];
        let genre, channel = [];

        for (var j = i; j < total; j++) {

          if (lang == result[j]['langname']) {
            genre = result[j]['genrename']

            for (var k = j; k < total; k++) {

              if (k == total - 1 && (result[k]['genrename'] == genre && lang == result[k]['langname'])) {
                temp.push({ name: genre, children: channel });
                j = k;
                i = k;
              }
              if (result[k]['genrename'] == genre && lang == result[k]['langname']) {
                channel.push({ name: result[k]['channame'], id: result[k]['chanid'] })
              } else {
                i = k - 1;
                j = k - 1;
                temp.push({ name: genre, children: channel });

                channel = [];
                break;
              }
            }
          } else {
            i = j - 1;
            break;
          }
        }
        temp1.push({
          name: lang,
          children: temp,
        });
        temp = []
      }


      this.nodes = temp1
      this.tree.treeModel.update();
    }

    setTimeout(() => {
      if (this.EditPackageForm.value['pack_type'] != 3) {
        this.selectnodes();
      }
    }, 1000);

  }


  selectnodes() {
    if (this.EditPackageForm.value['pack_type'] != 3) {
      let chanids = '[' + this.editdata['channelid'] + ']'

      let channel = JSON.parse(chanids);

      for (var i = 0; i < channel.length; ++i) {
        let leaf = this.tree.treeModel.getNodeById(JSON.parse(channel[i]))
        if (leaf)
          leaf.setIsSelected(true);
      }
    }
  }

  selectednodes() {
    if (this.EditPackageForm.value['packtype'] != 3) {
      const selectedNodes = [];
      Object.entries(toJS(this.tree.treeModel.selectedLeafNodeIds)).forEach(([key, value]) => {
        console.log(key, value);
        if (value === true) {
          selectedNodes.push(parseInt(key));
        }
      });
      return (selectedNodes);
    }
  }

  getnode() {
    const snode = this.selectednodes()
    console.log('node length', snode.length);


  }


  channels(item) {
    const modalRef = this.modal.open(PackagechannelComponent, { size: 'sm', container: 'nb-layout', backdrop: false });
    modalRef.componentInstance.modalHeader = 'Channel List';
    modalRef.componentInstance.item = item;
    modalRef.result.then((data) => {
      ;

    })

  }


  async addPack() {
    let checkaddonpack = this.addonpack.filter(item => item.state).map(item => item.packid),
    checkalacatepack = this.alacartepack.filter(item => item.state).map(item => item.packid);
    const nodeselected = this.selectednodes();
    console.log('node selected', nodeselected)
    if (this.EditPackageForm.value['packtype'] != 3 && nodeselected.length == 0) {
      this.toast.warning('Please Select Channel');
      return;
    } else if (this.EditPackageForm.value['packtype'] == 1 && nodeselected.length != 1) {
      this.toast.warning('Please Select Only One Channel');
      return;
    }

    this.EditPackageForm.value['channel'] = nodeselected;
    
    this.EditPackageForm.value['packid'] = this.id;
    console.log('base pack**********',this.baseBack)
this.EditPackageForm.value.package = [...checkaddonpack, ...checkalacatepack,this.baseBack];
let packages = [this.EditPackageForm.value];
console.log('bundle data edit ',packages)
    this.addpackagevalues = await this.packageser.editpackage(this.EditPackageForm.value)
    console.log('Package Updated', this.addpackagevalues)
    if (this.addpackagevalues && this.addpackagevalues[0].err_code == 0) {
      this.toast.success(this.addpackagevalues[0]['msg']);
      this.route.navigate(['/pages/channelcategory/packagelist'])
    } else {
      this.toast.warning(this.addpackagevalues[0]['msg'])
      console.log('Updated Data...', this.EditPackageForm.value);

    }
  }
  async getHeadend($event = '') {
    this.listhead = await this.headend.getHeadend({ like: $event })
  }

  BasePackage() {
    this.EditPackageForm.value["permission"] == 2 ? this.EditPackageForm.get('basic_package').setValidators([Validators.required]) : this.EditPackageForm.get('basic_package').clearValidators()
    this.EditPackageForm.get('basic_package').updateValueAndValidity();
  }


  async getblundledata() {

    this.getbundle = await this.packageser.listbundlepack({ hdid: this.EditPackageForm.value['hdid'] })
    this.getbundle = this.getbundle[0];
    if (this.getbundle) {
      this.package = this.getbundle;
      this.bpack = this.package.filter(item => item.packtype == 0);
      this.addonpack = this.package.filter(item => item.packtype == 2);
      this.alacartepack = this.package.filter(item => item.packtype == 1);
    }

  }

  share() {

  }


  createForm() {
    this.EditPackageForm = this._fb.group({
      packname: new FormControl(this.editdata?.packname || '', Validators.required),
      bcid: new FormControl(this.editdata?.bcid || '', Validators.required),
      srvtype: new FormControl(this.editdata?.srvtype.toString() || '', Validators.required),
      tax_type: new FormControl(this.editdata?.tax_type || '', Validators.required),
      hdid: new FormControl(this.editdata?.hdid || '', Validators.required),
      active: new FormControl(true),
      enable_tax: new FormControl(true),
      packtype: new FormControl(this.editdata?.packtype.toString(), Validators.required),
      broadcaster_share: new FormControl(this.editdata?.bcshare || '', [Validators.required, Validators.max(100)]),
      bcamt: new FormControl(this.editdata?.bcamt || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      // serviceid: new FormArray([
      //   this.createserviceid()
      // ])
    });
  }

  get val() {
    return this.EditPackageForm.value
  }

  taxcontrol() {

  }
}
