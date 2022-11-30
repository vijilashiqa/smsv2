import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxmodelService {

  constructor(private http: HttpClient) { }

async addboxmodel(params){
return await this.http.post("/boxmodel/addboxmodel",params).toPromise();
}
async listboxmodel(params){
  return await this.http.post("/boxmodel/listboxmodel",params).toPromise();
}
async editboxmodel(params){
  return await this.http.post("/boxmodel/editboxmodel",params).toPromise();
}
async getboxmodel(params){
  return await this.http.post("/boxmodel/getboxmodel",params).toPromise();
}

}
