import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})
export class RoleservicesService {
  role: any = [];
  constructor(private http: HttpClient,) { }

  getToken() {
		return (localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
	}
	getRefreshtoken(){
		return (localStorage.getItem('ref_token') ? JSON.parse(localStorage.getItem('ref_token')): null);
	}
	
	getroleid() {
		return (localStorage.getItem('userinfo') ? JSON.parse(JSON.parse(localStorage.getItem('userinfo'))['menurole']) : 0);
	}
	
	getuserFname() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['fname'] : 0);
	}
	getroleval() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['menurole'] : 0);
	}
	getprofileid() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['profile_id'] : 0);
	}
	
	
	
}
