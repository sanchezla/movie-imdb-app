import { Routes } from '@angular/router';

import { MovieComponent } from '../../pages/movie/movie.component';
import { TvSeriesComponent } from '../../pages/tv-series/tv-series.component';
import { HomeComponent } from '../../pages/home/home.component';
import { MovieDetailsComponent } from '../../pages/movie-details/movie-details.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MovieComponent },
    { path: 'movies-details/:id', component: MovieDetailsComponent },
    { path: 'tv-series', component: TvSeriesComponent }
];
