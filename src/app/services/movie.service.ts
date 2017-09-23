import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Movie } from './../models/movie.model';

@Injectable()
export class MovieService {
  public movies:Movie[] = [];
  public loading:boolean = false;
  constructor() { }

  getMovies(){
    return this.movies;
  }

  pushMovie(movie:Movie){
    let repeated = false;
    this.movies.forEach(thismovie => {
      if (movie.title === thismovie.title){
        repeated = true;  
      }
    });
    if (!repeated){
      this.movies.push(movie);
    }
  }
} 
