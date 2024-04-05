import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from '../social-icons/social-icons.component';
import { MacosWindowComponent } from '../macos-window/macos-window.component';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SocialIconsComponent, MacosWindowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private dataSharingService: DataSharingService
  ) {
    this.dataSharingService.mono.subscribe( value => {
      this.mono = value
    });
  }
  public mono:boolean = false;

}
