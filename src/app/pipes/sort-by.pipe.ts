import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './../models/movie.model';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(movies: Movie[], args: string): Movie[] {
    if (!movies) {return [];}
    if (!args) {return movies;}
    
    args = args.toLowerCase();
    movies.sort( (a:any, b:any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]){
        return 1;
      } else {
        return 0;
      }
    });
    
    return movies;
  }
}
