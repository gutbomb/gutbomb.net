import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MailService } from '../../services/mail.service';
import { AppconfigService } from '../../services/appconfig.service';


@Component({
  selector: 'macos-window',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './macos-window.component.html',
  styleUrl: './macos-window.component.scss'
})
export class MacosWindowComponent implements OnInit, OnDestroy {
  constructor(
    private mailService: MailService,
    private appConfigService: AppconfigService
  ) { }
  @Input() mono!: boolean;
  windowTitle: string = '';
  emailAddress: string = '';
  message: string = '';
  messageSent: boolean = false;
  displayCloseBubble: boolean = false;
  closeBubbleText: string = 'Don\'t be silly';
  closeBubbleMessages: any = [
    'Don\'t be silly.',
    'Why????',
    'What is to be gained???',
    'Leave me alone.',
    'No.',
    'It will never work, stop trying.'
  ];
  displayEmailBubble: boolean = false;
  emailBubbleText: string = '';
  displayMessageBubble: boolean = false;
  messageBubbleText: string = 'You didn\'t leave a message!';
  error: string = '';
  public mailSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.windowTitle = 'Contact Me';
  }

  ngOnDestroy(): void {
    this.mailSubscription?.unsubscribe();
  }

  closeDown() {
    this.displayCloseBubble = true;
  }

  closeUp() {
    this.closeBubbleText = this.closeBubbleMessages[Math.floor(Math.random() * this.closeBubbleMessages.length)];
    this.displayCloseBubble = false;
  }

  send(f: NgForm) {
    if (f.form.status === 'VALID') {
      this.mailSubscription = this.mailService.send(this.emailAddress, this.message) .subscribe(response => {
        this.messageSent = true;
      }, error => {
        console.log(error);
        this.messageSent = true;
        this.error = error.message;
      });
    } else {
      console.log(f.form);
      if (!this.emailAddress) {
        this.emailBubbleText = 'You didn\'t specify your email address!';
        this.displayEmailBubble = true;

      } else {
        if(f.form.controls['emailAddress'].status === 'INVALID') {
          this.emailBubbleText = 'You didn\'t provide a valid email address!';
          this.displayEmailBubble = true;
        }
      }
      if (!this.message) {
        this.displayMessageBubble = true;
      }
    }
  }

  clear() {
    this.emailAddress = '';
    this.message = '';
    this.messageSent = false;
  }
}
