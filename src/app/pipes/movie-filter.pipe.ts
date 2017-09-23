import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    console.log('pipeando')
    if (args){
      let filterText = args[0].toLocaleLowerCase();
      return filterText ? value.filter(movie => 
        movie.title.toLocaleLowerCase().indexOf(filterText) != -1) : value;
    } else {
      return value;
    }
  }

}
