import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MastermindService} from "../services/mastermind.service";

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor(private mastermindService: MastermindService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.mastermindService.next(`--> out: ${request.method} to ${request.urlWithParams}`);
    this.mastermindService.next(`-->      responseType=${request.responseType}`);
    if (request.body) this.mastermindService.next(`--> out: body ${JSON.stringify(request.body)}`);
    return next.handle(request);
  }
}
