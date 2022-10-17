import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __awaiter } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class HeadendService {

  constructor(private http: HttpClient,) { }


 async addheadend(params){
    return await this.http.post("/headend/addheadend", params).toPromise();
  }

  async listheadend(params){
    console.log('list..........')
    return await this.http.post("/headend/listheadend", params).toPromise();
  }

  async getheadendedit(params){
return await this.http.post("/headend/getheadendedit", params).toPromise();
  }
 

async editheadend(params){
  return await this.http.post("/headend/editheadend", params).toPromise();
}


async getHeadend(params){

  return await this.http.post("/headend/getHeadend",params).toPromise();

}

async getcas(params){

  return await this.http.post("/headend/getCas",params).toPromise();

}

async addhdcas(params){

  return await this.http.post("/headend/addHdCas",params).toPromise();
}
async listHdcas(param){

  return await this.http.post("/headend/listHdcas",param).toPromise();
}

async gethdcasedit (params){

  return await this.http.post("/headend/gethdcasedit" ,params).toPromise();
}

 async edithdcas(params){


  return   this.http.post("/headend/editHdCas",params).toPromise();
}

async addcas(params){
  return this.http.post("/headend/addcas",params).toPromise();
}

async editcas(params){
  return this.http.post("/headend/editcas",params).toPromise();
}

async listcas(params){
return this.http.post("/headend/listcas",params).toPromise();
}
}
