import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) { }


async getoperator(params){


  return await this.http.post("/subscriber/getoperator",params).toPromise();
}


async getbox(params){

  return await this.http.post("/subscriber/getbox",params).toPromise();
  
}

async addsubscriber(params){

  return await this.http.post("/subscriber/addsubscriber",params).toPromise();
}

async listsubscriber(params){

  return await this.http.post("/subscriber/listsubscriber",params).toPromise();
}


async addbulksubscriber(params){


  return await this.http.post("/subscriber/addbulksubscriber",params).toPromise();
}

}
