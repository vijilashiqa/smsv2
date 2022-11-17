import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  HeadendService,
  ChannelService,
  RoleservicesService,
} from "../../_services/index";
import * as JSXLSX from "xlsx";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "ngx-addchannelsrv",
  templateUrl: "./addchannelsrv.component.html",
  styleUrls: ["./addchannelsrv.component.scss"],
})
export class AddchannelsrvComponent implements OnInit {
  channeservlForm;
  cas: any = [];
  editdata = {};
  editflag = false;
  submit: boolean;
  channellist: any = [];
  disabled = false;
  channelsrv;
  result;
  alert: any;
  editable: boolean = false;
  id;
  router: any;
  listhead;
  listhdcas;
  listchnnel;
  bulkmeta: any = [];
  bulk = [];
  arrayBuffer: any;
  file: any[];
  constructor(
    private route: Router,
    private _fb: FormBuilder,
    private channel: ChannelService,
    private headend: HeadendService,
    public role: RoleservicesService,
    private toast: ToastrService,
    private channelService: ChannelService,
    private aRoute: ActivatedRoute
  ) { }

 async ngOnInit() {
    this.createForm();
    if (this.role.getroleid() == 999) {
      this.getHeadend();
    } else {
      this.getcashead();
      this.getchannelname();
    }
    this.id = this.aRoute.snapshot.queryParams["id"];
    if (this.id) {
      this.editable = true;
      this.editflag = true;
      this.edit();
   await   this.getHeadend();
    await  this.getcashead();
   await   this.getchannelname();
    }
  }
  async edit() {
    console.log("edit herer");
    this.editdata = await this.channelService.getchannelservices({
      id: this.id,
    });
    console.log("editdata .....", this.editdata);
    this.createForm();

  }
  metavalue() {
    this.bulkmeta = [
      // { msg: 'Please fill casType', label: 'CasteType*', assign_to: 'castype', required: true },
      {
        msg: "Please fill Channel",
        label: "ChannelName*",
        assign_to: "channelid",
        required: true,
      },
      {
        msg: "Please fill ServiceID",
        label: "ServiceId*",
        assign_to: "casserviceid",
        required: true,
      },
    ];
    return this.bulkmeta;
  }

  clearValidation() {
    console.log("validation");
    if (this.val["modetype"] == 0) {
      this.clearValue("channelid", "casserviceid");
    }
  }

  clearValue(...value) {
    for (let i of value) {
      console.log("clear value");
      this.channeservlForm.get(i).clearValidators();
      this.channeservlForm.get(i).updateValueAndValidity();
    }
  }

  async addchannelsrv() {
    this.submit = true;
    console.log('invalid', this.channeservlForm.invalid);
    if (!this.channeservlForm.valid) {
      //   window.alert('Please fill all mandatory fields')
      return;
    }
    let method = this.id ? "editchannelservices" : "addchannelsrv";
    console.log("update channel service list", method);
    if (this.id) this.channeservlForm.value["id"] = this.id;

    if (this.val["modetype"] == 1) {
      let result = await this.channel[method](this.channeservlForm.value);
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]["msg"]);
        this.route.navigate(["/pages/channelcategory/listchannelsrv"]);
      } else {
        this.toast.warning(result[0]["msg"]);
      }
    }
    if (this.bulk.length && this.val["modetype"] == 0) {
      let result = this.metavalue();
      for (let i = 0; i < this.bulk.length; i++) {
        for (let meta of result) {
          if (!this.bulk[i].hasOwnProperty(meta.label) && meta.required) {
            this.toast.warning(meta.msg);
            return;
          } else {
            this.bulk[i][meta.assign_to] = this.bulk[i][meta.label];
          }
        }
        this.bulk[i].hdid = this.val["hdid"];
        this.bulk[i].casid = this.val["casid"];
      }
      let resp = await this.channel.bulkchannelservices({ channel: this.bulk });
      console.log("bulkResult????????????????? ", resp);
      if (resp && resp[0].err_code == 0) {
        this.toast.success(resp[0]["msg"]);
        this.route.navigate(["/pages/channelcategory/listchannelsrv"]);
      } else {
        this.toast.warning(resp[0]["msg"]);
        console.log("add...", this.channeservlForm.value);
      }
    }
  }

  async getHeadend($event = "") {
    this.listhead = await this.headend.getHeadend({ like: $event });
    console.log(this.listhead);
  }
  async getcashead($event = "") {
    this.listhdcas = await this.headend.listHdcas({
      hdid: this.channeservlForm.value["hdid"],
    });
    this.listhdcas = this.listhdcas[0];
    console.log("hd cas list", this.listhdcas);
  }

  async getchannelname($event = "") {
    this.listchnnel = await this.channel.selectchannel({
      hdid: this.val["hdid"]
    });
    console.log("list channel ", this.listchnnel);
  }

  typeclearlheadend(val = "1") {
    this.changeclear("casid", "channelid");
  }
  changeclear(...data) {
    for (let i of data) {
      this.channeservlForm.controls[i].setValue("");
    }
  }

  typeclearcastype(val = "1") {
    this.changeclear("channelid");
  }

  changeListener(file) {
    this.file = file;
    this.filereader(this.file, (result) => {
      this.bulk = result;
      console.log("result............", this.bulk);
    });
  }

  filereader(file, callback) {
    if (file) {
      let fileReader = new FileReader(),
        filedata;
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = JSXLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        callback(JSXLSX.utils.sheet_to_json(worksheet, { raw: true }));
      };
      fileReader.readAsArrayBuffer(file);
    } else {
      callback([]);
    }
  }
  createForm() {
    this.channeservlForm = new FormGroup({
      hdid: new FormControl(this.editdata["hdid"] || "", Validators.required),
      modetype: new FormControl("1", Validators.required),
      casserviceid: new FormControl(this.editdata["casserviceid"] || "", Validators.required),
      casid: new FormControl(this.editdata["casid"] || "", Validators.required),
      channelid: new FormControl(this.editdata["channelid"] || "", Validators.required),
    });
  }

  get val() {
    return this.channeservlForm.value;
  }
}
