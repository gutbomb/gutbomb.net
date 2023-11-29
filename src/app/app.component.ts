import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { MacosWindowComponent } from './components/macos-window/macos-window.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SocialIconsComponent, MacosWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gutbomb.net';
  public mono: boolean = false;

  toggleMono() {
    this.mono = !this.mono;
    if (this.mono) {
      document.body.classList.add('mono');
    } else {
      document.body.classList.remove('mono');
    }
  }
}
