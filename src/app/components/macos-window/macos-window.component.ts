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
  displayBubble: boolean = false;
  bubbleText: string = 'Don\'t be silly';
  bubbleMessages: any = [
    'Don\'t be silly.',
    'Why????',
    'What is to be gained???',
    'Leave me alone.',
    'No.',
    'It will never work, stop trying.'
  ];
  error: string = '';
  public mailSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.windowTitle = 'Contact Me';
    console.log(this.mono);
  }

  ngOnDestroy(): void {
    this.mailSubscription?.unsubscribe();
  }

  closeDown() {
    this.displayBubble = true;
  }

  closeUp() {
    this.bubbleText = this.bubbleMessages[Math.floor(Math.random() * this.bubbleMessages.length)];
    this.displayBubble = false;
  }

  send(f: NgForm) {
    if (f.form.status === 'VALID') {
      this.mailSubscription = this.mailService.send(this.emailAddress, this.message) .subscribe(response => {
        this.messageSent = true;
      }, error => {this.error = error.error.status})

    }
  }

  clear() {
    this.emailAddress = '';
    this.message = '';
    this.messageSent = false;
  }
}
