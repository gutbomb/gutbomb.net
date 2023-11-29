import { Injectable } from '@angular/core';
import AppConfig from '../../../appconfig.json';
@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  constructor() { }

  public baseUrl() {
    return AppConfig.baseUrl;
  }
}
