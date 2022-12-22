import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
 

  constructor(private http: HttpClient) { }

  
  async selectdpositemode(params) {
    return await this.http.post("/account/selectdpositemode", params).toPromise();
  }

  
async adddeposite(params){
  return await this.http.post("/account/adddeposite",params).toPromise();
}

}
