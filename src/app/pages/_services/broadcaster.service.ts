import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {

  constructor(private http: HttpClient ) { }

async addbroadcaster(params){

return await this.http.post("/broadcaster/addbroadcaster",params).toPromise();

}


async listbroadcaster(params){

  return await this.http.post("/broadcaster/listbroadcaster",params).toPromise();
}

async editBroadcaster(params){
console.log('editbroadcast')
  return await this.http.post("/broadcaster/editbroadcaster",params).toPromise();
}


async getbroadcasteredit(params){
  console.log('In Edit service api');
  return  this.http.post("/broadcaster/getbroadcasteredit",params).toPromise();
}


async getbroadcaster(params){

  return this.http.post("/broadcaster/getbroadcast",params).toPromise();

}
}
