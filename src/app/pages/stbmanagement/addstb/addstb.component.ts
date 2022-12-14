import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HeadendService, VendorService } from "../../_services";
import { StbmanagementService } from "../../_services/stbmanagement.service";
import * as JSXLSX from "xlsx";
import { StockService } from "../../_services/stock.service";
import { SubscriberService } from "../../_services/subscriber.service";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

@Component({
  selector: "ngx-addstb",
  templateUrl: "./addstb.component.html",
  styleUrls: ["./addstb.component.scss"],
})
export class AddstbComponent implements OnInit {
  arrayBuffer: any;
  bulk: any = [];
  failure: any = [];
  getstbtypeg;
  result;
  bulkmeta: any = [];
  submit: boolean = false;
  AddStbForm;
  head;
  cas;
  listhead;
  listhdcas;
  getmodel;
  getmodelar;
  getinvoicedet;
  model: any = [];
  stb_type;
  invoice;
  opt: any = [];
  s = 0;
  f = 0;getoperatorlist;
  file: any;
  operatortype;
  vc_status = false;
  bulkData: any;

  constructor(
    private headend: HeadendService,
    private vendor: VendorService,
    private toast: ToastrService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private stock: StockService,
    private stb: StbmanagementService
  ) {}

async  ngOnInit() {
 await   this.createForm();
 await   this.getHeadend();
  await  this.getInvoicefun();
    this.serialValidation();


  }

  metavalue() {
    this.bulkmeta = [
      {
        msg: "Please fill VC Number",
        label: "VC Number*",
        assign_to: "vcid",
        required: this.vc_status,
      },
      {
        msg: "Please fill ServiceID",
        label: "Serial Number*",
        assign_to: "boxno",
        required: true,
      },
    ];
    return this.bulkmeta;
  }

  clearValidation() {
    console.log("validation");
    if (this.val["status"] == false) {
      this.clearValue("vcid", "boxno");
    }
  }

  clearValue(...value) {
    for (let i of value) {
   //   console.log("clear value");
      this.AddStbForm.get(i).clearValidators();
      this.AddStbForm.get(i).updateValueAndValidity();
    }
  }

  async addstb() {
    this.submit = true;
    const invalid = [];
    const control = this.AddStbForm.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.AddStbForm.invalid) {
      console.log("Invalid value -----", invalid);
      // window.alert('Please fill the mandatory fields')
      return;
    }
    if (this.val["status"]) {
      this.AddStbForm.value["status"] =
      this.AddStbForm.value["status"] == "false" ? 0 : 1;
      let result = await this.stb.addstb(this.val);
      console.log("add...", result);
      if (result && result[0].err_code == 0) {
        this.toast.success(result[0]["msg"]);
        this.route.navigate(["/pages/stbmanagement/stblist"]);
      } else {
        this.toast.warning(result[0]["msg"]);
      }
    }
    if (this.bulk.length && !this.val["status"]) {
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
      }
      this.val["bulkstb"] = this.bulk;
      console.log("form", this.val);
      let resp = await this.stb.addstbbulk(this.val);
      console.log("bulkResult????????????????? ", resp);
      if (resp && resp[0].err_code == 0) {
        this.toast.success(resp[0]["msg"]);
        this.route.navigate(["/pages/stbmanagement/stblist"]);
      } else {
        this.toast.warning(resp[0]["msg"]);
      }
    }
  }
  get val() {
    return this.AddStbForm.value;
  }

  async getHeadend() {
    this.listhead = await this.headend.getHeadend({});
  }
  async getcashead($event = "") {
    this.listhdcas = await this.headend.listHdcas({ hdid: this.AddStbForm.value["hdid"],like: $event });
    this.listhdcas = this.listhdcas[0];
  //  console.log("list hd cas", this.listhdcas);
  }

  async getModelcas() {
    this.getmodel = await this.stock.getstockmodel({ hdid: this.AddStbForm.value["hdid"], hdcasid: this.AddStbForm.value["casid"] });
  }
  async getstbtype() {
    this.getstbtypeg = await this.stb.getstbtype({ hdid: this.AddStbForm.value["hdid"], boxtypeid: this.AddStbForm.value["modelid"]});
    console.log("getstb type", this.getstbtypeg);
  }
  async getInvoicefun() {
    this.getinvoicedet = await this.stb.getinvoice({ hdid: this.AddStbForm.value["hdid"], bmid: this.AddStbForm.value["modelid"] });
   // console.log("get invoice", this.getinvoicedet);
  }
  typeClear(val = "1") {
    this.changeclear("casid", "modelid", "stb_type", "stockinwardid");
  }

  typeClearopear(val = "1") {
    this.changeclear("lcoid");

  }

  changeclear(...data) {
    for (let i of data) {
      this.AddStbForm.controls[i].setValue("");
    }
  }
  async getoperatortypef() {
    this.operatortype = await this.stb.getoperatortype({ usertype: this.AddStbForm.value["usertype"], hdid: this.AddStbForm.value["hdid"] });
    console.log("operator type ", this.operatortype);
  }

  setModelType() {
    let model = this.AddStbForm.value["modelid"];
    let modeli = this.getmodel.find((x) => x.bmid == model);
    let ctrl = this.AddStbForm.controls;
    ctrl["vcid"].clearValidators();
    if (model != "") {
      ctrl["stb_type"].setValue(modeli.stbtypeid);
      if (modeli["chiptype"] == 1 && this.val["status"]) {
        ctrl["vcid"].setValidators(Validators.required);
      }
      if (modeli["chiptype"] == 1 && !this.val["status"]) {
        this.vc_status = true;
      } else
        this.vc_status = false;
    }
    ctrl["vcid"].updateValueAndValidity();
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

  serialValidation() {
    if (this.AddStbForm.value["status"]) {
      this.ctrl["boxno"].setValidators([Validators.required]);
    } else {
      this.ctrl["boxno"].clearValidators();
    }
    this.ctrl["boxno"].updateValueAndValidity();
  }

  get ctrl() {
    return this.AddStbForm.controls;
  }
  Download() {
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(
      this.failure
    );
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, "Sheet1");
    /* save to file */
    JSXLSX.writeFile(wb, "stb_failed_report" + EXCEL_EXTENSION);
  }

  createForm() {
    this.AddStbForm = new FormGroup({
      hdid: new FormControl("", Validators.required),
      casid: new FormControl("", Validators.required),
      modelid: new FormControl("", Validators.required),
      stockinwardid: new FormControl("", Validators.required),
      stb_type: new FormControl(""),
      hotelid: new FormControl(""),
      lcoid: new FormControl(""),
      distributor: new FormControl(""),
      usertype: new FormControl("", Validators.required),
      subdis: new FormControl(""),
      boxno: new FormControl(""),
      vcid: new FormControl(""),
      status: new FormControl(false),
    });
  }
}
