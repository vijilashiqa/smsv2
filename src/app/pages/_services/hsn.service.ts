import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HsnService {

  constructor(private http: HttpClient) { }


  async addhsn(params){
    return await this.http.post("/hsn/addhsn",params).toPromise();
    }

    async listhsn(params){
      return await this.http.post("/hsn/listhsn",params).toPromise();
    } 

    async edithsn(params){
    return await this.http.post("/hsn/edithsn",params).toPromise();
    }

    async gethsn(params){

      return await this.http.post("/hsn/gethsn",params).toPromise();
    }


    async selecthsn(params){

      return await this.http.post("/hsn/selecthsn",params).toPromise();
    }
}
