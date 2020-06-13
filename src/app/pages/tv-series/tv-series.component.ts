import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

  public listTvShows: any[] = [];

  constructor(protected movieService: MovieService) { }

  ngOnInit(): void {

    this.getPopularTvShows();
    this.geTopRatedTvShows();
  }

  getPopularTvShows() {
    this.movieService.getPopularTvShows().subscribe(
      (data) => {
        this.listTvShows =  data.results;
    });
  }

  geTopRatedTvShows() {
    this.movieService.geTopRatedTvShows().subscribe(
      (data) => {
        this.listTvShows = data.results;
    });
  }

}
