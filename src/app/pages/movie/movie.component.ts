import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movies: any[] = [];
  public yearsMovies: any[] = [];
  public years: any = null;

  constructor(protected movieService: MovieService) { }

  ngOnInit() {    

    this.getPopularityMovies();
    this.getUpcomingMovies();
    // this.getPopularTvShows();

  }

  getPopularityMovies() {
    this.movieService.getPopularMovies().subscribe(
      (data) => {
        this.movies =  data.results;
        // console.log(data);
      });
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe(
      (data) => {
        this.movies =  data.results;
        // console.log(data);
      });
  }

  getMoviesByYear(year) {
    this.movieService.getMoviesByYear(year).subscribe(
      (data) => {
        this.movies = data.results;
        // console.log(this.yearsMovies);
    });
  }

}
