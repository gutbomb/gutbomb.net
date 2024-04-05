import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root',
})
export class MacaddressService {
  constructor(
    private http: HttpClient,
    private appConfigService: AppconfigService
  ) {}

  baseurl = this.appConfigService.baseUrl();

  public getPassword(macAddress: string) {
    return this.http.get(`${this.baseurl}/mac/${macAddress}`);
  }
}
