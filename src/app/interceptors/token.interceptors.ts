import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {

  private static getToken() {
    return localStorage.getItem('_auth_token') || '';
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set(
        'authorization',
        CustomHttpInterceptorService.getToken()
      )
    });

    return next.handle(request);
  }
}
