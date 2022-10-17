import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class LogserviceService {

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }


  login(params) {
    console.log('LOGIN', params)
    return this.http.post<any>("/login/account", params);
  }
  logout() {
    this.router.navigate(['/auth/login'])
    localStorage.clear();
  }
 
}
  

