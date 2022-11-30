import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxtypeService {

  constructor(private http: HttpClient) { }
  async addboxtype(params){
    return await this.http.post("/boxtype/addboxtype",params).toPromise();
    }
    async listboxtype(params){
      return await this.http.post("/boxtype/listboxtype",params).toPromise();
    }
    async editboxtype(params){
      return await this.http.post("/boxtype/editboxtype",params).toPromise();
    }
    async selectboxtype(params){
      return await this.http.post("/boxtype/selectboxtype",params).toPromise();
    }

}
