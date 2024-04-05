import { Component, OnDestroy } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MacaddressService } from '../../services/macaddress.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-macaddress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './macaddress.component.html',
  styleUrl: './macaddress.component.scss',
})
export class MacaddressComponent implements OnDestroy {
  constructor(
    private macAddressService: MacaddressService,
    private dataSharingService: DataSharingService
  ) {
    this.dataSharingService.mono.subscribe((value) => {
      this.mono = value;
    });
  }
  public passwordSubscription: Subscription = new Subscription();

  public password: any;
  public macAddress: any;
  public error: any;
  displayCloseBubble: boolean = false;
  closeBubbleText: string = "Don't be silly";
  closeBubbleMessages: any = [
    "Don't be silly.",
    'Why????',
    'What is to be gained???',
    'Leave me alone.',
    'No.',
    'It will never work, stop trying.',
  ];
  displayErrorBubble: boolean = false;
  errorBubbleText: string = '';
  mono: boolean = false;

  getPassword(f: NgForm) {
    if (f.form.status === 'VALID') {
      this.passwordSubscription = this.macAddressService
        .getPassword(this.macAddress)
        .subscribe(
          (data) => {
            this.password = data;
            this.error = '';
          },
          (error) => {
            console.log(error.error.status);
            this.error = error.error;
            this.password = '';
          }
        );
    } else {
      if (!this.macAddress) {
        this.errorBubbleText = "you didn't specify a mac address";
        this.displayErrorBubble = true;
      }
    }
  }

  clear() {
    this.password = {};
    this.error = {};
    this.macAddress = '';
  }

  ngOnDestroy(): void {
    this.passwordSubscription?.unsubscribe();
  }

  closeDown() {
    this.displayCloseBubble = true;
  }

  closeUp() {
    this.closeBubbleText =
      this.closeBubbleMessages[
        Math.floor(Math.random() * this.closeBubbleMessages.length)
      ];
    this.displayCloseBubble = false;
  }
}
