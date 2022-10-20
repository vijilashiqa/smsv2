import { HttpClient } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }


async addoperator(params){

return await this.http.post("/operator/addoperator",params).toPromise();
}


async listoperatortype(params){

  return await this.http.post("/operator/listoperatortype",params).toPromise();
}


async listoperator (params){

  return await this.http.post("/operator/listoperator" ,params).toPromise();

}

async geteditoperator(params){

  return await this.http.post("/operator/geteditoperator",params).toPromise();

}


async editoperator(params){

  return await this.http.post("/operator/editoperator",params).toPromise();
}

async getlcocode(params){
  return await this.http.post("/operator/getlcooperator",params).toPromise();
}

async gethdcas(params){

  return await this.http.post("/operator/gethdcas",params).toPromise();
}


async assignusercas(params){

  return await this.http.post("/operator/assignusercas" ,params).toPromise();
}

}
