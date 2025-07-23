import { Routes } from '@angular/router';
import { Router, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
