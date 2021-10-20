import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor', request.headers);
    request = request.clone({
      setHeaders: {
        'origin': 'localhost'
      }
    })
    console.log('Interceptor', request.headers);
    return next.handle(request).pipe(
      tap(res => console.log(res))
    );
  }
}
