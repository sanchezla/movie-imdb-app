import { Routes } from '@angular/router';

import { MovieComponent } from '../../pages/movie/movie.component';
import { TvSeriesComponent } from '../../pages/tv-series/tv-series.component';
import { HomeComponent } from 'app/pages/home/home.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MovieComponent },
    { path: 'tv-series', component: TvSeriesComponent }
];
