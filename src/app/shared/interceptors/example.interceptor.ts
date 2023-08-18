import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // any alteration in httpRequest can be done here - nothing at all is being done currently, but the @signifyhealth/angular-common
    //  library uses a DefaultInterceptor that handles putting the jwt into any header of an api request that is in your list of
    //  secureApis. The source for that interceptor can be found in the angular-libraries repo...
    // https://dev.azure.com/signifyhealth/HCC/_git/angular-libraries?path=/projects/angular-common/src/lib/interceptors/default.interceptor.ts
    return next.handle(httpRequest);
  }
}
