import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public mono: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}