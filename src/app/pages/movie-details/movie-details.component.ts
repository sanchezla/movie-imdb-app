import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from '../../interfaces';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  public movieId: number;
  public movieCredits: any[] = [];
  public autorStorage: any[] = [];
  public movieDetails: MovieDetails = new MovieDetails();
  public viewCount = 5;

  constructor(protected route: ActivatedRoute,
              protected movieService: MovieService) { }

  ngOnInit(): void {
    
    this.movieId = this.route.snapshot.params.id;
    console.log(this.movieId);

    this.getMovieCreditsById(this.movieId);
    this.getMovieDetailsById(this.movieId);
    

  }

  public changeViewMovie() {
    this.movieCredits = [];
    this.movieCredits = this.autorStorage.slice(0, this.viewCount);
  }

  getMovieDetailsById(id) {
    this.movieService.getMovieDetailsById(id).subscribe(
      (movieDetails) => {
      this.movieDetails = movieDetails;
      console.log(movieDetails);
      
    });
  }

  getMovieCreditsById(id) {
    this.movieService.getMovieCreditsById(this.movieId)
    .pipe(
      take(1)
    ).subscribe(
      (movieCredits) => {
        this.autorStorage = movieCredits.cast;
        setTimeout(() =>{
            this.movieCredits = movieCredits.cast.slice(0, this.viewCount);
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
