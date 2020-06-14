import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movies: any[] = [];
  public moviesStorage: any[] = [];
  public yearsMovies: any[] = [];
  public years: any = null;
  public viewCount = 8;

  constructor(protected movieService: MovieService) { }

  ngOnInit() {    

    this.getPopularityMovies();
    this.getUpcomingMovies();

  }

  public changeViewMovie() {
    this.movies = this.moviesStorage.slice(0, this.viewCount);
  }

  getPopularityMovies() {
    this.movieService.getPopularMovies()
    .pipe(
      take(1)
    ).subscribe(
      (movies) => {
        setTimeout(() =>{
          this.moviesStorage = movies.results;
          this.movies = movies.results.slice(0, this.viewCount);
        },1500);
      
    },
    err => {
      console.log(err);
    },
    () => {
      // petición finalizada);
    });
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovies().pipe(
      take(1)
    ).subscribe(
      (movies) => {
        setTimeout(() =>{
          this.moviesStorage = movies.results;
          this.movies = movies.results.slice(0, this.viewCount);
        },1500);
      
    },
    err => {
      console.log(err);
    },
    () => {
      // petición finalizada);
    });
  }

}
