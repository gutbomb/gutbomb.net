import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-icons',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.scss'
})
export class SocialIconsComponent implements OnInit{
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(fab);
  }
  @Input() mono!: boolean;
  public socialIcons: any = [];

  ngOnInit(): void {
    this.socialIcons = [
      {
        account: 'My Resume',
        url: '/assets/resume/index.html',
        icon: {
          library: 'fas',
          icon: 'building'
        }
      }, {
        account: '@GutBombTech',
        url: 'https://youtube.com/@GutBombTech',
        icon: {
          library: 'fab',
          icon: 'youtube'
        }
      }, {
        account: '@gutbomb',
        url: 'https://twitter.com/gutbomb',
        icon: {
          library: 'fab',
          icon: 'twitter'
        }
      }, {
        account: '@gutbomb@bitbang.social',
        url: 'https://bitbang.social/@gutbomb',
        icon: {
          library: 'fab',
          icon: 'mastodon'
        }
      }, {
        account: '@gutbomb',
        url: 'https://bsky.app/profile/gutbomb.bsky.social',
        icon: {
          library: 'fas',
          icon: 'cloud'
        }
      }, {
        account: '@gutbomb',
        url: 'https://instagram.com/gutbomb303',
        icon: {
          library: 'fab',
          icon: 'instagram'
        }
      }, {
        account: '@GutBomb',
        url: 'https://printables.com/@GutBomb',
        icon: {
          library: 'fas',
          icon: 'cube'
        }
      }, {
        account: '@gutbomb',
        url: 'https://github.com/gutbomb',
        icon: {
          library: 'fab',
          icon: 'github'
        }
      }
    ];
  }
}
