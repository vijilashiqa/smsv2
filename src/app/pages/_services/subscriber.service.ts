import { HttpClient } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) { }
  async getoperator(params) {
    return await this.http.post("/subscriber/getoperator", params).toPromise();
  }
  async getbox(params) {
   return await this.http.post("/subscriber/getbox", params).toPromise();
  }
  async addsubscriber(params) {
    return await this.http.post("/subscriber/addsubscriber", params).toPromise();
  }
  async listsubscriber(params) {
    return await this.http.post("/subscriber/listsubscriber", params).toPromise();
  }
  async bulkaddsubscriber(params) {
    return await this.http.post("/subscriber/bulkaddsubscriber", params).toPromise();
  }
  async editsubscriber(params) {
    return await this.http.post("/subscriber/geteditsubscriber", params).toPromise();
  }
  async editsubcriberlist(params) {
    return await this.http.post("/subscriber/editsubscriber", params).toPromise();
  }
  async getboxedit(params) {
    return await this.http.post("/subscriber/getboxedit", params).toPromise();
  }
}
