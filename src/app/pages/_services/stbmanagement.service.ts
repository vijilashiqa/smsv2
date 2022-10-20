import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StbmanagementService {

  constructor(private http: HttpClient) { }


async getinvoice(params){
  console.log('stbm')
  return await this.http.post("/stbm/getstblist",params).toPromise();
}


async addstb(params){
  return await this.http.post("/stbm/addstb",params).toPromise()
}

async liststb(params){
  return await this.http.post("/stbm/stblist",params).toPromise();  
}



async getstbtype(params){
  return await this.http.post("/stbm/getboxtype",params).toPromise();
  
  }  

async editstb(params){


  return await this.http.post("/stbm/stbedit",params).toPromise();
}

async addstbbulk(params){

  return await this.http.post("/stbm/addbulkstb",params).toPromise();
}

async getboxpair(params){

  return await this.http.post("/stbm/getboxpair",params).toPromise();
}


async getboxvcpair(params){

  return await this.http.post("/stbm/getboxvcpair",params).toPromise();
}

async addstbpair(params){

  return await this.http.post("/stbm/addstbpair",params).toPromise();
}

async getoperatortype (params){

  return await this.http.post("/stbm/getoperatortype",params).toPromise();
  
}


}
