import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parseMessage } from '@angular/localize/src/utils';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }



  async addlanguage(params) {

    return await this.http.post("/channel/addLang", params).toPromise();
  }


  async listlang(params) {

    return await this.http.post("/channel/listlang", params).toPromise();
  }


  async editlanguage(params) {

    console.log('am in edit ')

    return await this.http.post("/channel/editlang", params).toPromise();
  }


  async addgenre(params) {
    console.log('addgenre')
    return await this.http.post("/channel/addgenre", params).toPromise();
  }


  async listgenre(params) {
    console.log('lisgenre')
    return await this.http.post("/channel/listgenre", params).toPromise();
  }


  async editgenre(params) {

    return await this.http.post("/channel/editgenre", params).toPromise();
  }


  async addchannel(params) {

    return await this.http.post("/channel/addchannel", params).toPromise();

  }

  async listchannel(params) {
    return await this.http.post("/channel/listchannel", params).toPromise();
  }

  async getchanneledit(params) {
    return await this.http.post("/channel/getchanneledit", params).toPromise();
  }

  async editchannel(params) {
    return await this.http.post("/channel/editchannel", params).toPromise();
  }


  async addchannelsrv(params) {
    console.log('channel services')
    return await this.http.post("/srv/addchannelsrv", params).toPromise();
  }


  async listchannelservices(params) {


    return await this.http.post("/srv/listchannelsrv", params).toPromise();
  }


  async getchannelservices(params) {

    return await this.http.post("/srv/getchannelsrvedit", params).toPromise();

  }


  async editchannelservices(params) {

    return await this.http.post("/srv/channelsrvedit", params).toPromise();
  }


  async bulkchannelservices(params) {

    return await this.http.post("/srv/addchannelsrvbulk", params).toPromise();
  }


  getchannel_for_pack(params) {
    return this.http.post("/channel/getchannel_for_pack", params)
  }



async selectgenere(params){


  return this.http.post("/channel/selectgenre",params).toPromise();
}


async selectchannel(params){

  return this.http.post("/srv/selectchannel",params).toPromise();
}


async selectchanname(params){

  return this.http.post("/channel/selectchanname",params).toPromise();
  
}
}
