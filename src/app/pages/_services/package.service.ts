import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }


async addpackage(params){

  return await this.http.post("/package/addpackage",params).toPromise();
} 

async listbundlepack(params){

// console.log("list bundle ******8")
  return await this.http.post("/package/getpacklist",params).toPromise()
}

async listpackage (params){

  return await this.http.post("/package/packlist",params).toPromise();
}


async editdatapackage(params){

  return await this.http.post("/package/getpackedit",params).toPromise();
}

async editpackage(params){
  console.log('editpackae here')
  return await this.http.post("/package/packageedit",params).toPromise();
}


async bulkpackage(params)
{
  return await this.http.post("/package/bulkpackage",params).toPromise();
}
}
