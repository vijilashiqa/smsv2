import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }


async addstock(params){
return await this.http.post("/stock/addstock",params).toPromise();
}

async liststock(params){

  return await this.http.post("/stock/liststock",params).toPromise();
}

async editstock(params){
  return await this.http.post("/stock/editstock",params).toPromise();
}

async listmaterial(params){

  return await this.http.post("/stock/listmaterial",params).toPromise();

}

async geteditstock(params){

  return await this.http.post("/stock/geteditstock",params).toPromise();

}

async getstockvendor(params){
  return await this.http.post("/stock/getstockvendor",params).toPromise();
}

async getstockmodel(params){
return await this.http.post("/stock/getstockmodel",params).toPromise();
}

async getstocklocation(params){
return await this.http.post("/stock/getstocklocation",params).toPromise();
}

}
