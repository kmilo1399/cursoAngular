import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
    {
    path: 'favorites',
    loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
    {
    path: 'history',
    loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MediaPlayerComponent, HeaderUserComponent],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
