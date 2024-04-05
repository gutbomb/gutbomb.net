import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private dataSharingService: DataSharingService) {}
  title = 'gutbomb.net';
  public mono: boolean = false;

  toggleMono() {
    this.mono = !this.mono;
    if (this.mono) {
      this.dataSharingService.mono.next(true);
      document.body.classList.add('mono');
    } else {
      this.dataSharingService.mono.next(false);
      document.body.classList.remove('mono');
    }
  }
}
