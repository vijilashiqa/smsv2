import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { RoleservicesService } from '../_services/roleservices.service';
@Injectable({
  providedIn: 'root'
})
export class JwtrequestService implements HttpInterceptor {

  constructor(private Roleserv: RoleservicesService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        request = request.clone({url:env.baseUrl+request.url});
         
        const token = this.Roleserv.getToken();
        const ref_token = this.Roleserv.getRefreshtoken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    authorization: token,
                    refresh:ref_token
                }
            });
        }
         

        return next.handle(request);
  }
}
