import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private appConfigService: AppconfigService
  ) { }
  baseurl = this.appConfigService.baseUrl();

  public send(emailAddress: string, message: string) {
    return this.http.post(`${this.baseurl}/mail`, {emailAddress: emailAddress, message: message});
  }
}
