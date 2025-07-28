import { Component } from '@angular/core';
import { SideBarComponent } from "@shared/components/side-bar/side-bar.component";
import { AuthRoutingModule } from "@modules/auth/auth-routing.module";
import { MediaPlayerComponent } from "@shared/components/media-player/media-player.component";
import { HeaderUserComponent } from "@shared/components/header-user/header-user.component";

@Component({
  selector: 'app-home-page',
  imports: [SideBarComponent, AuthRoutingModule, MediaPlayerComponent, HeaderUserComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
