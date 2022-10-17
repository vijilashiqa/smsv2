import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  async addvendor(params){

    return await this.http.post("/vendors/addvendor",params).toPromise();
  } 

async editvendor(params){

  return await this.http.post("/vendors/vendoredit",params).toPromise();
}


async getvendor(params){

  return await this.http.post("/vendors/getvendor",params).toPromise();
}

  async listvendor(params){
    return await this.http.post("/vendors/listvendor",params).toPromise();
  }

async addvendordetails(params){


  return await this.http.post("/vendordet/addvendordet",params).toPromise();

}

async listvendordetails(params){


  return await this.http.post("/vendordet/listvendordet",params).toPromise();
}

async editvendordetails(params){


  return await this.http.post("/vendordet/editvendordet",params).toPromise();
}


async getvendordetails(params){


  return await this.http.post("/vendordet/getvendordet",params).toPromise();
}


async addstbtype(params){


  return await this.http.post("/vendors/addboxmodel",params).toPromise();
}


async editstbtype(params){

  return await this.http.post("/stbm/getboxtype" ,params).toPromise();
}

async liststbtype(params){

  return await this.http.post("/vendors/listboxmodel",params).toPromise();
}


async addmodel(params){

  return await this.http.post("/vendors/addmodel" ,params).toPromise();
}


async listmodel(params){

return await this.http.post("/vendors/listmodel",params).toPromise();

}

async editmodel(params){


  return await this.http.post("/vendors/editmodel",params).toPromise();
}
async addhsn(params){

return await this.http.post("/vendordet/addhsn",params).toPromise();

}

async edithsn(param){

  return await this.http.post("/vendordet/edithsn",param).toPromise();
}

async listhsn(params){

  return await this.http.post("/vendordet/listhsn",params).toPromise();
}


async getmodel(params){

  return await this.http.post("/vendordet/getstockmodel",params).toPromise();

}


async getboxmodel(params){

  return await this.http.post("/vendors/getboxmodel",params).toPromise();
}

async getloction(params){
  return await this.http.post("/vendordet/getstocklocation",params).toPromise();
}


async getvender(params){
  return await this.http.post("/vendordet/getstockvendor",params).toPromise();

}



async gethsnlist(params){
  return await this.http.post("/vendordet/gethsn",params).toPromise();
}

async addstock(params){
console.log('add stock api')
  return await this.http.post("/vendordet/addstock",params).toPromise();

}

async liststock (params){
  return await this.http.post("/vendordet/listStock",params).toPromise();
}

async getstock(params){
  return await this.http.post("/vendordet/geteditstock",params).toPromise();
}

async editstock(params){
console.log('edit');
  return await this.http.post("/vendordet/editstock",params).toPromise();
}


async listmaterial(params){
  return await this.http.post("/vendordet/listmaterial",params).toPromise();
}
}
