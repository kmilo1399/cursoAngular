import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
  standalone: true
})
export class MediaPlayerComponent {

  mockCover:any = {
    cover: 'https://w7.pngwing.com/pngs/101/563/png-transparent-mago-de-oz-la-bruja-la-leyenda-de-la-mancha-xanandra-mago-de-oz-logo-fictional-character-music-download-thumbnail.png',
    album:'Mago de oz',
    name:'Las Brujas'
  }
}
