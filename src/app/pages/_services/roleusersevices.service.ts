import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getOriginalNode } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class RoleusersevicesService {
  constructor(private http: HttpClient) { }
  async addrole(params) {
    return await this.http.post("/role/addrole", params).toPromise();
  }
  async listrole(params){
    return await this.http.post("/role/listrole",params).toPromise();
  }
async getRole(params){
  return await this.http.post("/role/getRole",params).toPromise();
}


async editrole(params){
return await this.http.post("/role/editrole",params).toPromise();
}


async getprolife(params){

  return await this.http.post("/role/getprofile",params).toPromise();
}


async getuserrole(params){

  return await this.http.post("/role/getuserrole",params).toPromise();
}
}
