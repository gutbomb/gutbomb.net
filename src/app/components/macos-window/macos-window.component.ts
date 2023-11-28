import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'macos-window',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './macos-window.component.html',
  styleUrl: './macos-window.component.scss'
})
export class MacosWindowComponent implements OnInit {
  windowTitle: string = '';
  emailAddress: string = '';
  message: string = '';
  messageSent: boolean = false;

  ngOnInit(): void {
    this.windowTitle = 'Contact Me';
  }

  closeClick() {
    alert('don\'t do that');
  }

  send(f: NgForm) {
    if (f.form.status === 'VALID') {
      console.log(this.emailAddress);
      console.log(this.message);
      this.messageSent = true;
    }
  }

  clear() {
    this.emailAddress = '';
    this.message = '';
    this.messageSent = false;
  }
}
