import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(protected http: HttpClient) { }

  getPopularMovies(): Observable<Movie> {
    const params = new HttpParams()
    .set('api_key', environment.api_key)
    .set('lenguage', 'en-US')
    .set('sort_by', 'popularity.desc');
  
    const url = `${environment.api}/discover/movie`;
  
    return this.http.get<Movie>(`${url}`, {params});
  }
  
  getUpcomingMovies(): Observable<Movie> {
    const params = new HttpParams()
    .set('api_key', environment.api_key)
    .set('lenguage', 'en-US');
  
    const url = `${environment.api}/movie/upcoming`;
  
    return this.http.get<Movie>(`${url}`, {params});
  }
  
  getMoviesByYear(year) {
  
    const params = new HttpParams()
    .set('api_key', environment.api_key)
    .set('primary_release_year', year);
  
    const url = `${environment.api}/discover/movie`;
  
    return this.http.get<any>(`${url}`, {params});
  }
  
  getAllGenre(): Observable<any> {
    const params = new HttpParams()
    .set('api_key', environment.api_key)
    .set('lenguage', 'en-US');
  
    const url = `${environment.api}/genre/movie/list`;
  
    return this.http.get<any>(`${url}`, {params})
    
    .pipe(
      map(
        (data) => {
      
          if (!data) {
            this.handleError(data);
             return; 
          } 
          return data;  
        }
      )
    );
    
  }
  
  getPopularTvShows(): Observable<any> {
    const params = new HttpParams()
    .set('api_key', environment.api_key)
    .set('lenguage', 'en-US');
  
    const url = `${environment.api}/tv/popular`;
  
    return this.http.get<any>(`${url}`, {params});
  }
  
  geTopRatedTvShows(): Observable<any> {
    const params = new HttpParams()
    .set('api_key', environment.api_key)
    .set('lenguage', 'en-US');
  
    const url = `${environment.api}/tv/top_rated`;
  
    return this.http.get<any>(`${url}`, {params});
  }
  
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}


